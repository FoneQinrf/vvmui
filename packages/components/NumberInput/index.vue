<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-14 17:56:33
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="Am-Number-Input">
    <div class="Am-Number-Input-icon" v-if="icon">
      <Icon :icon="icon" :size="16" />
    </div>
    <div @click="focus" :class="['Am-Number-Input-input', align]">
      <Input readonly :disabled="disabled" :placeholder="placeholder" v-model="currentValue" />
    </div>
    <div v-if="unity" class="Am-Number-Input-unity">{{unity}}</div>
    <keyboard
      v-model="show"
      :confirmText="confirmText"
      :isDecimal="isDecimal"
      :negativeNumber="negativeNumber"
      @input="close"
      @on-keyup="keyup"
      @on-remove="remove"
      @on-confirm="confirm"
    />
  </div>
</template>

<script>
import bus from "../../utils/bus";
import keyboard from "./component/keyboard";
import Icon from "../Icon";
import emitter from "../../utils/emitter";
import Input from "../Input";

export default {
  name: "Number-Input",
  mixins: [emitter],
  components: { Icon, keyboard, Input },
  props: {
    value: {
      type: [Number, String],
      default: ""
    },
    align: {
      type: String,
      default: "left",
      validator(val) {
        return ["left", "right", "center"].includes(val);
      }
    },
    placeholder: {
      type: String,
      default: "请输入内容"
    },
    icon: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    unity: {
      type: String
    },
    maxlength: {
      type: Number,
      default: 20
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    isDecimal: {
      type: Boolean,
      default: true
    },
    negativeNumber: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false,
      currentValue: String(this.value)
    };
  },
  watch: {
    value(val) {
      this.currentValue = String(val);
    }
  },
  methods: {
    cursorClick(index) {
      this.cursorIndex = index + 1;
    },
    focus() {
      if (this.disabled) {
        return;
      }
      this.show = true;
      bus.$emit("number-focus", this);
    },
    close() {
      this.show = false;
      this.$emit("on-close");
    },
    confirm() {
      this.$emit("on-confirm", Number(this.currentValue));
      this.dispatch("From-Item", "change", Number(this.currentValue));
      this.show = false;
    },
    keyup(key) {
      if (this.maxlength) {
        if (this.currentValue.length >= this.maxlength) {
          return;
        }
      }
      this.currentValue += String(key);
      this.$emit("input", Number(this.currentValue));
    },
    remove() {
      if (this.currentValue) {
        this.currentValue = this.currentValue.substr(
          0,
          this.currentValue.length - 1
        );
        this.$emit("input", this.currentValue ? Number(this.currentValue) : '');
        this.$emit("on-remove", this.currentValue ? Number(this.currentValue) : '');
        return;
      }
      this.$emit("on-remove", "");
    }
  },
  mounted() {
    bus.$on("number-focus", e => {
      if (this._uid !== e._uid) {
        this.show = false;
      }
    });
  }
};
</script>