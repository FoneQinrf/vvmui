<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 16:18:41
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="Am-Upload">
    <template v-if="type === 'single'">
      <Am-Upload
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
      </Am-Upload>
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
        :value-item-string="valueString"
        ref="upload"
      >
        <slot></slot>
        <slot name="file"></slot>
      </Multiple>
    </template>
  </div>
</template>

<script>
import emitter from "@/utils/emitter.js";
import AmUpload from "./components/upload";
import mixins from "./components/mixins";
import Multiple from "./components/multiple";
export default {
  name: "Upload",
  components: { AmUpload, Multiple },
  mixins: [mixins, emitter],
  props: {
    value: {
      type: [String, Array]
    },
    icon: String,
    valueString: {
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
      this.dispatch("From-Item", "change", val);
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