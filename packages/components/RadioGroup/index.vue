<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-10-30 13:32:15
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-31 14:14:39
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div :class="['Am-Radio-Group',inline ? 'inline' : '']">
    <slot></slot>
  </div>
</template>

<script>
import emitter from "../../utils/emitter";
export default {
  name: "Radio-Group",
  mixins: [emitter],
  props: {
    inline: {
      type: Boolean
    },
    value: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    }
  },
  data() {
    return {
      children: "",
      currentValue: this.value
    };
  },
  methods: {
    change(val) {
      this.currentValue = val;
      this.$emit("input", val);
      this.$emit("on-change", val);
      this.dispatch("From-Item", "change", val);
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  }
};
</script>