<!--
 * @Author: Fone丶峰
 * @Date: 2020-05-06 10:54:39
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-07 10:25:38
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
<template>
  <ul class="vvm-Collapse-Group">
    <slot></slot>
  </ul>
</template>

<script>
import { findComponentsDownward } from "@/utils";
export default {
  name: "Collapse-Group",
  props: {
    value: {
      type: [Array, String],
      default() {
        return [];
      }
    },
    accordion: Boolean
  },
  data() {
    return {
      components: "",
      currentValue: this.value
    };
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  },
  methods: {
    init() {
      const components = findComponentsDownward(this, "Collapse");
      if (components) {
        this.components = components;
      }
    },
    click(name) {
      this.init();
      if (this.accordion) {
        this.currentValue = this.currentValue === name ? "" : name;
      } else {
        const index = this.currentValue.indexOf(name);
        if (index < 0) {
          this.currentValue.push(name);
        } else {
          this.currentValue.splice(index, 1);
        }
      }
      this.$emit("input", this.currentValue);
      this.$emit("on-change", this.currentValue);
    }
  },
  mounted() {
    this.init();
  }
};
</script>