<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:00:55
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="Am-Input">
    <div class="Am-Input-icon" v-if="icon">
      <Icon :size="20" :icon="icon" />
    </div>
    <div class="Am-Input-input">
      <input
        :disabled="disabled"
        :placeholder="placeholder"
        v-model.trim="currentValue"
        class="Am-Input-context"
        :type="type"
        :maxlength="maxlength"
        @input="change"
        @blur="blur"
        @focus="focus"
      />
      <div :style="style" class="Am-Input-button">
        <slot></slot>
      </div>
      <span v-if="rightIcon || unity" @click="click">
        <template v-if="rightIcon">
          <Icon :icon="rightIcon" />
        </template>
        <template v-else-if="unity">{{unity}}</template>
      </span>
    </div>
  </div>
</template>

<script>
import Icon from "../Icon";
import emitter from "../../utils/emitter";
import { vwWitdh } from "../../utils";
export default {
  name: "Input",
  mixins: [emitter],
  components: {
    Icon
  },
  props: {
    icon: {
      type: String
    },
    value: {
      type: String
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    rightIcon: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    unity: {
      type: String
    },
    maxlength: {
      type: Number
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        return ["text", "password"].includes(value);
      }
    },
    scrollTarget: {
      type: String
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
      this.$emit("on-click");
    },
    change(e) {
      const val = e.target.value;
      this.currentValue = val;
      this.$emit("input", val);
      this.$emit("on-change", val);
      this.dispatch("From-Item", "change", val);
    },
    blur() {
      this.$emit("on-blur", this.currentValue);
      this.dispatch("From-Item", "blur", this.currentValue);
      const scrollDom = this.scrollTarget
        ? document.querySelector(this.scrollTarget)
        : document.body;
      scrollDom.scrollTop = scrollDom.scrollTop;
    },
    focus() {
      this.$emit("on-focus", this.currentValue);
    }
  },
  computed: {
    style() {
      if (this.$slots.default) {
        return {
          flex: `1 1 ${vwWitdh(160)}`
        };
      }
      return {};
    }
  }
};
</script>
