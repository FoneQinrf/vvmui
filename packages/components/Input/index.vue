<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-06 09:23:49
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-05 13:43:58
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="g7-Input">
    <div class="g7-Input-icon" v-if="icon">
      <Icon :size="20" :icon="icon" />
    </div>
    <div class="g7-Input-input">
      <input
        :disabled="disabled"
        :placeholder="placeholder"
        v-model.trim="currentValue"
        class="g7-Input-context"
        :type="type"
        :maxlength="maxlength"
        @input="change"
        @blur="blur"
        @focus="focus"
      />
      <span @click="click">
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
export default {
  name: "G-Input",
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
    scrollDom: {
      default() {
        return document.body;
      }
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
      this.dispatch("G-From-Item", "change", val);
    },
    blur() {
      this.$emit("on-blur", this.currentValue);
      this.dispatch("G-From-Item", "blur", this.currentValue);
      this.scrollDom.scrollTop = this.scrollDom.scrollTop;
    },
    focus() {
      this.$emit("on-focus", this.currentValue);
    }
  }
};
</script>
