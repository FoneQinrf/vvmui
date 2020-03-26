<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-10-30 13:32:15
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-11-04 18:06:13
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div :class="['g7-Radio-Group',inline ? 'inline' : '']">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "G-Radio-Group",
  props: {
    inline: {
      type: Boolean
    },
    value: {
      type: [String, Number]
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
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  }
};
</script>