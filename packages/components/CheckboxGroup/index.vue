<!--
 * @Author: Fone丶峰
 * @Date: 2020-01-02 15:40:27
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-26 16:47:05
 * @Description: 
 * @Email: qinrifeng@163.com
 -->

<template>
  <div :class="['Am-CheckboxGroup',{['inline']:inline}]">
    <slot></slot>
  </div>
</template>

<script>
import { type } from "../../mixins/props";
import { findComponentsDownward } from "../../utils/index";
import emitter from "../../utils/emitter";
export default {
  name: "Checkbox-Group",
  mixins: [type, emitter],
  data() {
    return {
      childrens: [],
      currentValue: this.value
    };
  },
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    inline: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean
    },
    icon: {
      type: String,
      default: "iconselected"
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
      this.updateModel();
    }
  },
  methods: {
    updateModel() {
      this.childrens = findComponentsDownward(this, "G-Checkbox");
      if (this.childrens) {
        this.childrens.forEach(element => {
          element.model = this.currentValue;
          element.currentValue = this.currentValue.indexOf(element.label) >= 0;
        });
      }
    },
    change(value) {
      this.currentValue = value;
      this.$emit("input", value);
      this.$emit("on-change", value);
      this.dispatch("From-Item", "change", value);
      this.updateModel();
    }
  },
  mounted() {
    this.updateModel();
  }
};
</script>