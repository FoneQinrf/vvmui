<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-27 20:09:04
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-07 13:41:58
 * @Description: 
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="Am-Upload-multiple">
    <Upload-Placeholder
      :style="style"
      v-for="(item,$index) in currentValue"
      :key="$index"
      :index="$index"
      :url="valueItemString ? item : item.value"
      :isImage="valueItemString ? isImage : item.isImage"
      :showRemove="showRemove"
      @on-remove="onRemove"
    />
    <Upload
      v-if="show"
      :style="{marginTop: '5px'}"
      :icon="icon"
      :size="size"
      :accept="accept"
      :name="name"
      :acceptErrorMessage="acceptErrorMessage"
      :compress="compress"
      :iconSize="iconSize"
      :compressSize="compressSize"
      :imgWidth="imgWidth"
      :response="response"
      :showLabel="showLabel"
      :headers="headers"
      :action="action"
      :data="data"
      :quality="quality"
      :beforeRemove="beforeRemove"
      :beforeUpload="beforeUpload"
      :onSuccess="onSuccess"
      :onSuccessText="onSuccessText"
      :onError="onError"
      :onProgress="onProgress"
      :onLoadend="onLoadend"
      :onErrorText="onErrorText"
      :disabled="disabled"
      :showRemove="showRemove"
      :type="type"
      :maxNumber="maxNumber"
      :isImage="isImage"
      @input="input"
      ref="upload"
    >
      <slot></slot>
    </Upload>
  </div>
</template>

<script>
import mixins from "./mixins";
import Upload from "./upload";
import UploadPlaceholder from "./uploadPlaceholder";
export default {
  mixins: [mixins],
  components: { Upload, UploadPlaceholder },
  props: {
    value: Array,
    icon: {
      type: String,
      default: "iconzengjia1"
    },
    valueItemString: Boolean
  },
  data() {
    return {
      style: {
        width: 0,
        height: 0,
        marginTop: "5px"
      },
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  },
  computed: {
    show() {
      if (!this.maxNumber) {
        return true;
      }
      return this.currentValue.length < this.maxNumber;
    }
  },
  methods: {
    onRemove(index) {
      if (!this.beforeRemove) {
        this.currentValue.splice(index, 1);
        this.$emit("input", this.currentValue);
        return;
      }

      const before = this.beforeRemove(
        this.currentValue[index],
        this.currentValue
      );
      if (before && before.then) {
        before.then(res => {
          if (res !== false) {
            this.currentValue.splice(index, 1);
            this.$emit("input", this.currentValue);
          }
        });
        return;
      }
      if (before !== false) {
        this.currentValue.splice(index, 1);
        this.$emit("input", this.currentValue);
      }
    },
    input(val) {
      this.currentValue.push(val);
      this.$emit("input", this.currentValue);
    },
    uploadProgress(percent) {
      this.$refs.upload.uploadProgress(percent);
    }
  },
  mounted() {
    this.$nextTick(() => {
      const { offsetWidth, offsetHeight } = this.$refs.upload.$el;
      this.style.width = `${offsetWidth}px`;
      this.style.height = `${offsetHeight}px`;
    });
  }
};
</script>