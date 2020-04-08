<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-01 17:39:16
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:04:07
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div :class="['Am-Switch',active ? 'color-active' : '',type]" @click="click">
    <span :class="['Am-Switch-radius',active ? 'active' : 'close']"></span>
    <div v-if="disabled" class="Am-Switch-disabled"></div>
  </div>
</template>

<script>
import { type } from "../../mixins/props";
import emitter from "../../utils/emitter";
export default {
  name: "Am-Switch",
  mixins: [type,emitter],
  props: {
    value: {
      type: [Number, Boolean, String]
    },
    disabled: {
      type: Boolean
    },
    activeValue: {
      type: [Number, Boolean, String],
      default: undefined
    },
    inactiveValue: {
      type: [Number, Boolean, String],
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
      if (
        typeof this.activeValue !== "undefined" &&
        typeof this.inactiveValue !== "undefined"
      ) {
        this.currentValue = this.active ? this.inactiveValue : this.activeValue;
      } else {
        this.currentValue = !this.currentValue;
      }
      this.$emit("on-change", this.currentValue);
      this.$emit("input", this.currentValue);
      this.dispatch("From-Item", "change", this.currentValue);
    }
  },
  computed: {
    active() {
      if (
        typeof this.activeValue !== "undefined" &&
        typeof this.inactiveValue !== "undefined"
      ) {
        return this.currentValue === this.activeValue;
      }
      return this.currentValue;
    }
  }
};
</script>