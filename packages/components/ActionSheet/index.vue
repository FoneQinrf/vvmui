<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-08 11:17:40
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 18:16:50
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
<template>
  <div class="Am-Action-Sheet">
    <div
      @click="click"
      :class="['Am-Action-Sheet-placeholder',{placeholder:!placeholderText.flag},{disabled:disabled}]"
    >{{placeholderText.placeholder}}</div>
  </div>
</template>

<script>
import vm from "./src/index.js";
import emitter from "../../utils/emitter";

export default {
  name: "Action-Sheet",
  mixins: [emitter],
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: {
      type: Boolean
    },
    isMask: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: "取消"
    },
    label: {
      type: String,
      default: "label"
    },
    returnKey: {
      type: String,
      default: "value"
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    value: {
      type: [Number, String, Boolean],
      default: undefined
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
    }
  },
  methods: {
    click() {
      if (this.disabled) {
        return;
      }
      this.$emit("on-show");
      vm.init({
        isMask: this.isMask,
        close: () => {
          this.$emit("on-close");
        },
        closeText: this.closeText,
        onMask: () => {
          this.$emit("on-mask");
        },
        label: this.label,
        data: this.data,
        onConfirm: item => {
          this.currentValue = item[this.returnKey];
          this.$emit("input", this.currentValue);
          this.$emit("on-confirm", this.currentValue, item);
          this.dispatch("From-Item", "change", this.currentValue);
        }
      });
    }
  },
  computed: {
    placeholderText() {
      if (
        typeof this.currentValue !== "undefined" &&
        this.currentValue !== ""
      ) {
        let str = "";
        this.data.map(item => {
          if (item[this.returnKey] === this.currentValue) {
            str = item[this.label];
          }
        });
        return { placeholder: str, flag: true };
      }
      return { placeholder: this.placeholder, flag: false };
    }
  }
};
</script>