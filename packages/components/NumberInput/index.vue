<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 13:12:38
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="vvm-Number-Input">
    <div @click="focus" :class="['vvm-Number-Input-input', align]">
      <Input
        readonly
        :icon="icon"
        :unity="unity"
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="currentValue"
      />
    </div>
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
import bus from "@/utils/bus";
import Icon from "@/components/Icon";
import dispatch from "@/components/Emitter";
import Input from "@/components/Input";
import keyboard from "./component/keyboard";

export default {
  name: "Number-Input",
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
      const value = this.currentValue ? Number(this.currentValue) : "";
      this.$emit("on-confirm", value);
      dispatch("From-Item", "change", value, this);
      this.show = false;
    },
    keyup(key) {
      if (this.maxlength) {
        if (this.currentValue.length >= this.maxlength) {
          return;
        }
      }
      this.currentValue += String(key);
      const value = Number(this.currentValue);
      this.$emit("input", value);
      dispatch("From-Item", "change", value, this);
    },
    remove() {
      if (this.currentValue) {
        this.currentValue = this.currentValue.substr(
          0,
          this.currentValue.length - 1
        );
        const value = this.currentValue ? Number(this.currentValue) : "";
        this.$emit("input", value);
        this.$emit("on-remove", value);
        dispatch("From-Item", "change", value, this);
        return;
      }
      dispatch("From-Item", "change", "", this);
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