<!--
 * @Descripttion: upload
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-22 15:50:01
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-25 17:14:34
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="g7-Upload">
    <template v-if="type === 'single'">
      <Upload
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
        v-model="currentValue"
        @input="input"
        :type="type"
        :maxNumber="maxNumber"
        :isImage="isImage"
        ref="upload"
      >
        <slot></slot>
      </Upload>
    </template>
    <template v-else>
      <Multiple
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
        v-model="currentValue"
        @input="input"
        :type="type"
        :maxNumber="maxNumber"
        :isImage="isImage"
        :value-item-string="valueItemString"
        ref="upload"
      >
        <slot></slot>
        <slot name="file"></slot>
      </Multiple>
    </template>
  </div>
</template>

<script>
import Upload from "./components/upload";
import mixins from "./components/mixins";
import Multiple from "./components/multiple";
import emitter from "../../utils/emitter";
export default {
  name: "G-Upload",
  components: { Upload, Multiple },
  mixins: [mixins, emitter],
  props: {
    value: {
      type: [String, Array]
    },
    icon: String,
    valueItemString: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
      this.dispatch("G-From-Item", "change", val);
    }
  },
  methods: {
    input(val) {
      this.$emit("input", val);
    },
    onProgressPercent(percent) {
      this.$refs.upload.uploadProgress(percent);
    }
  }
};
</script>