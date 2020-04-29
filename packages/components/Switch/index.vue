<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-01 17:39:16
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 12:53:40
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div :class="['vvm-Switch',active ? 'color-active' : '', type]" @click="click">
    <span :class="['vvm-Switch-radius',active ? 'active' : 'close']"></span>
    <div v-if="disabled" class="vvm-Switch-disabled"></div>
  </div>
</template>

<script>
import { type } from "@/mixins/props";
import dispatch from "@/components/Emitter";
export default {
  name: "v-Switch",
  mixins: [type],
  props: {
    value: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean
    },
    activeValue: {
      type: [String, Number, Boolean],
      default: undefined
    },
    inactiveValue: {
      type: [String, Number, Boolean],
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
      dispatch("From-Item", "change", this.currentValue, this);
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