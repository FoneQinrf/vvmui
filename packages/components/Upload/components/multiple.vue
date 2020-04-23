<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-08 09:48:03
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 11:13:50
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="Am-Upload-multiple">
    <Upload-Placeholder
      :style="style"
      v-for="(item,$index) in currentValue"
      :key="$index"
      :index="$index"
      :url="valueString ? item : item.value"
      :isImage="valueString ? isImage : item.isImage"
      :showRemove="showRemove"
      @on-remove="onRemove"
    />
    <Upload
      v-if="show"
      :style="{marginTop: '8px'}"
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
    valueString: Boolean
  },
  data() {
    return {
      style: {
        width: 0,
        height: 0,
        marginTop: "8px"
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
      this.beforeRemove(this.currentValue[index], this.currentValue, index);
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
      if (this.$refs.upload) {
        const { offsetWidth, offsetHeight } = this.$refs.upload.$el;
        this.style.width = `${offsetWidth}px`;
        this.style.height = `${offsetHeight}px`;
        return;
      }
      this.style.width = `${136}px`;
      this.style.height = `${80}px`;
    });
  }
};
</script>