<!--
 * @Author: Fone丶峰
 * @Date: 2019-11-05 10:53:12
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 12:00:22
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div :class="['vvm-Radio-Group',inline ? 'inline' : '']">
    <slot></slot>
  </div>
</template>

<script>
import dispatch from "@/components/Emitter";
export default {
  name: "Radio-Group",
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
      dispatch("From-Item", "change", val, this);
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  }
};
</script>