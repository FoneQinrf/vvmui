/* CheckboxGroup
 * @Author: Fone丶峰 
 * @Date: 2020-01-02 15:41:03 
 * @Last Modified by: Fone丶峰
 * @Last Modified time: 2020-01-06 16:35:01
 */
<template>
  <div :class="['g7-CheckboxGroup',{['inline']:inline}]">
    <slot></slot>
  </div>
</template>

<script>
import { type } from "../../mixins/props";
import { findComponentsDownward } from "../../utils/index";
export default {
  name: "G-Checkbox-Group",
  mixins: [type],
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
      this.updateModel();
    }
  },
  mounted() {
    this.updateModel();
  }
};
</script>