<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 11:51:03
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="vvm-Input">
    <div class="vvm-Input-icon" v-if="icon">
      <Icon :icon="icon" />
    </div>
    <div class="vvm-Input-input">
      <template v-if="readonly">
        <input
          :disabled="disabled"
          :placeholder="placeholder"
          v-model.trim="currentValue"
          class="vvm-Input-context readonly"
          readonly="readonly"
          :type="type"
          :maxlength="maxlength"
          @input="change"
          @blur="blur"
          @focus="focus"
        />
      </template>
      <template v-else>
        <input
          :disabled="disabled"
          :placeholder="placeholder"
          v-model.trim="currentValue"
          class="vvm-Input-context"
          :type="type"
          :maxlength="maxlength"
          @input="change"
          @blur="blur"
          @focus="focus"
        />
      </template>
      <div :style="style" class="vvm-Input-button">
        <slot></slot>
      </div>
      <div v-if="rightIcon || unity" @click="click" class="vvm-Input-unity">
        <span>
          <template v-if="rightIcon">
            <Icon :icon="rightIcon" />
          </template>
          <template v-else-if="unity">{{ unity }}</template>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import dispatch from "@/components/Emitter";
import Icon from "@/components/Icon";
import { vwWitdh } from "@/utils";
export default {
  name: "Input",
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
    },
    readonly: Boolean
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
      dispatch("From-Item", "change", val, this);
    },
    blur() {
      this.$emit("on-blur", this.currentValue);
      dispatch("From-Item", "blur", this.currentValue, this);
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
