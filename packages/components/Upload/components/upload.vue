<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-05 14:18:06
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-25 17:13:20
 * @Description: 
 * @Email: qinrifeng@g7.com.cn
 -->
<template>
  <div class="g7-Upload-single">
    <Upload-Placeholder
      :url="value"
      :iconSize="iconSize"
      :icon="icon"
      :isImage="isImage"
      :showRemove="showRemove"
      @on-remove="onRemove"
    >
      <slot></slot>
    </Upload-Placeholder>
    <input
      class="g7-Upload-input"
      @change="change"
      :disabled="computedDisabled"
      :name="name"
      type="file"
      ref="input"
    />
    <!-- 图片压缩需要用到的canvas -->
    <canvas hidden="hidden" v-if="compress" ref="canvas"></canvas>
    <!-- 进度条 -->
    <div v-if="progress > 0" class="g7-Upload-progress">
      <div :style="{width:`${progress}%`}" class="g7-Upload-progress-bar"></div>
    </div>
  </div>
</template>

<script>
import mixins from "./mixins";
import UploadPlaceholder from "./uploadPlaceholder";
import { getType, fetch } from "./utils";
import Toast from "../../~Toast"; //自定义组件
const compressList = ["png", "PNG", "jpg", "JPG", "jpeg", "JPEG"];
export default {
  components: { UploadPlaceholder },
  mixins: [mixins],
  props: {
    value: {
      type: String
    },
    icon: {
      type: String,
      default: "iconcamera"
    }
  },
  data() {
    return {
      file: "",
      progress: 0,
      src: ""
    };
  },
  computed: {
    computedDisabled() {
      return this.disabled || this.progress !== 0;
    }
  },
  methods: {
    change(e) {
      if (this.disabled) {
        return;
      }
      const file = e.target.files[0];
      if (!file) {
        return;
      }

      const type = getType(file.name);
      if (this.accept.length) {
        if (!this.accept.includes(type)) {
          Toast.info(this.acceptErrorMessage);
          return;
        }
      }

      const size = Math.round((file.size / 1024) * 100) / 100;
      if (size > this.size) {
        Toast.info(`请上传小于${this.size / 1024}M的文件`);
        return;
      }
      if (this.isCompress(type, size)) {
        this.canvasDataURL(URL.createObjectURL(file));
        return;
      }
      this.$emit("on-change");
      this.file = file;
      this.upload(file);
    },
    /**
     * 判断是否满足压缩条件
     */
    isCompress(type, size) {
      return (
        this.compress && compressList.includes(type) && size > this.compressSize
      );
    },
    canvasDataURL(base) {
      const img = new Image();
      img.src = base;
      const that = this;
      function ImgOnload() {
        /**
         * 计算生成图片的宽高
         */
        const scale = this.width / this.height;
        const width =
          that.imgWidth === false || this.width <= that.imgWidth
            ? this.width
            : that.imgWidth;
        const height = width / scale;
        const canvas = that.$refs.canvas;
        canvas.width = width;
        canvas.height = height;
        //利用canvas绘制压缩的图片并生成新的blob
        const context = canvas.getContext("2d");
        context.drawImage(this, 0, 0, width, height);
        canvas.toBlob(
          blob => {
            that.file = blob;
            that.upload(blob);
            that.$emit("on-change", blob, that.options);
          },
          "image/png",
          that.quality
        );
        /**
         * 使用完的createObjectURL需要释放内存
         */
        window.URL.revokeObjectURL(this.src);
      }
      img.onload = ImgOnload;
    },
    /**
     * 上传成功
     */
    onload(e) {
      this.progress = 0;
      this.$emit("input", e);
      if (this.onSuccess) {
        this.onSuccess(this.file, e);
        return;
      }
      Toast.info(this.onSuccessText);
    },
    /**
     * 上传进度
     */
    uploadProgress(e) {
      this.progress = e;
      if (this.onProgress) {
        this.onProgress(this.file, e);
      }
    },
    /**
     * 上传失败
     */
    uploadError(e) {
      this.progress = 0;
      if (this.onError) {
        this.onSuccess(this.file, e);
        return;
      }
      Toast.info(this.onErrorText);
    },
    /**
     * 请求结束
     */
    uploadLoadend(e) {
      this.clearInput();
      if (this.onloadend) {
        this.onloadend(this.file, e);
      }
    },
    /**
     * 上传
     */
    upload(file) {
      this.clearInput();
      if (!this.beforeUpload) {
        fetch(this, file);
        return;
      }

      const before = this.beforeUpload(file);
      if (before && before.then) {
        before.then(res => {
          if (res !== false) {
            fetch(this, file);
            return;
          }
          this.progress = 0;
        });
        return;
      }
      if (before !== false) {
        fetch(this, file);
      }
    },
    /**
     * 删除文件
     */
    onRemove() {
      this.clearInput();
      if (this.type === "single") {
        if (!this.beforeRemove) {
          this.$emit("input", "");
          return;
        }

        const before = this.beforeRemove(this.file, this.value);
        if (before && before.then) {
          before.then(res => {
            if (res !== false) {
              this.$emit("input", "");
            }
          });
          return;
        }
        if (before !== false) {
          this.$emit("input", "");
        }
      }
    },
    clearInput() {
      this.$refs.input.value = null;
    }
  }
};
</script>