<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-11-06 14:10:08
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-31 11:47:58
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="Am-Number-Input">
    <div class="Am-Number-Input-icon" v-if="icon">
      <Icon :icon="icon" :size="16" />
    </div>
    <div @click.stop="focus" class="Am-Number-Input-input Am-ellipsis">
      <div v-if="currentValue" :class="['Am-Number-Input-text',align]">
        <template v-for="(item,$index) in currentValue">
          <span
            @click.stop="cursorClick($index)"
            :key="`${$index}A`"
            :class="['text-item',{disabled:disabled}]"
          >{{item}}</span>
          <template v-if="show">
            <template v-if="cursorIndex">
              <span
                @click.stop="cursorClick($index)"
                :key="`${$index}B`"
                v-show="cursorIndex === ($index+1)"
                class="cursor"
              ></span>
            </template>
            <template v-else>
              <span
                @click.stop="cursorClick($index)"
                :key="`${$index}C`"
                v-show="currentValue.length === ($index+1) && show"
                class="cursor"
              ></span>
            </template>
          </template>
        </template>
      </div>
      <div :class="['Am-Number-Input-placeholder',align,{'disabled':disabled}]" v-else>
        {{placeholder}}
        <span v-show="show" class="cursor"></span>
      </div>
    </div>
    <div v-if="unity" class="Am-Number-Input-unity">{{unity}}</div>
  </div>
</template>

<script>
import { on, off } from "../../utils/event";
import bus from "../../utils/bus";
import keyboard from "./component";
import Icon from "../Icon";
import emitter from "../../utils/emitter";

export default {
  name: "Number-Input",
  mixins: [emitter],
  components: { Icon },
  props: {
    value: {
      type: [String, Number],
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
      currentValue: String(this.value),
      cursorIndex: ""
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
      this.showKeyboard();
    },
    focus() {
      if (this.disabled) {
        return;
      }
      this.cursorIndex = "";
      this.showKeyboard();
    },
    showKeyboard() {
      if (this.disabled) {
        return;
      }
      this.$emit("on-focus");
      this.show = true;
      bus.$emit("number-focus", this);
      const { show } = keyboard;
      show({
        confirmText: this.confirmText,
        keyup: this.keyup,
        remove: this.remove,
        confirm: this.confirm,
        close: this.close,
        isDecimal: this.isDecimal,
        negativeNumber: this.negativeNumber
      });
    },
    close() {
      if (this.show) {
        this.show = false;
        this.$emit("on-close");
      }
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
      if (key === ".") {
        if (!this.currentValue) {
          this.currentValue = "0";
        }
      }
      String(key);
      if (key) {
        if (this.cursorIndex) {
          this.currentValue = this.insertStr(
            this.currentValue,
            this.cursorIndex,
            key
          );
          this.cursorIndex += 1;
        } else {
          this.currentValue += key;
        }
        this.$emit("input", Number(this.currentValue));
      }
    },
    insertStr(soure, start, newStr) {
      return soure.slice(0, start) + newStr + soure.slice(start);
    },
    removeStr(soure, x) {
      return soure.substring(0, x) + soure.substring(x + 1, soure.length);
    },
    remove() {
      if (this.currentValue.length === 0) {
        return;
      }
      if (this.cursorIndex) {
        this.currentValue = this.removeStr(
          this.currentValue,
          this.cursorIndex - 1
        );
        this.cursorIndex -= 1;
      } else {
        this.currentValue = this.currentValue.substring(
          0,
          this.currentValue.length - 1
        );
      }
      if (this.currentValue) {
        this.$emit("input", Number(this.currentValue));
        this.$emit("on-remove", Number(this.currentValue));
        return;
      }
      this.$emit("input", "");
      this.$emit("on-remove", "");
    }
  },
  mounted() {
    const { close } = keyboard;
    on(document.body, "click", () => {
      close();
      this.close();
    });
    bus.$on("number-focus", e => {
      if (this._uid !== e._uid) {
        this.show = false;
      }
    });
  },
  destroyed() {
    off(document.body, "click", null);
  }
};
</script>