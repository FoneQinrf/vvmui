<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-10-30 13:32:05
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-27 14:00:57
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <label class="Am-Radio">
    <span :class="['Am-Radio-icon',`Am-text-color-${parentType}`,parentDisabled ? 'disabled' : '']">
      <transition name="fade">
        <Icon v-show="active" :size="20" :icon="parentIcon" />
      </transition>
    </span>
    <span :class="['Am-Radio-text',parentDisabled ? 'disabled' : '']">
      <slot>{{label}}</slot>
    </span>
    <input
      v-if="parent"
      :disabled="parentDisabled"
      class="Am-Radio-input"
      :value="label"
      type="radio"
      :name="name"
      @change="change"
    />
    <input
      v-else
      :name="name"
      :disabled="parentDisabled"
      class="Am-Radio-input"
      type="radio"
      @change="change"
    />
  </label>
</template>

<script>
import Icon from "../Icon";
import { findComponentUpward } from "../../utils";
import emitter from "../../utils/emitter";
export default {
  name: "Radio",
  mixins: [emitter],
  components: { Icon },
  props: {
    value: {
      type: [Number, String, Boolean]
    },
    type: {
      type: String,
      default: "default",
      validator: function(value) {
        return ["default", "errer", "success", "warning"].includes(value);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number]
    },
    name: {
      default: "radio"
    },
    icon: {
      type: String,
      default: "iconradioactive"
    }
  },
  data() {
    return {
      currentValue: this.value,
      parent: ""
    };
  },
  methods: {
    change(e) {
      if (this.disabled) {
        return;
      }
      if (this.parent) {
        this.currentValue = e.target.value;
        this.parent.change(this.currentValue);
        return;
      }
      this.currentValue = e.target.checked;
      this.$emit("input", this.currentValue);
      this.$emit("on-change", this.currentValue);
      this.dispatch("From-Item", "change", this.currentValue);
    },
    parentFnc(options) {
      if (this.parent) {
        return this.parent[options] ? this.parent[options] : this[options];
      }
      return this[options];
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    }
  },
  computed: {
    active() {
      return this.parent
        ? this.parent.currentValue === this.label
        : this.currentValue;
    },
    parentDisabled() {
      const { parentFnc } = this;
      return parentFnc("disabled");
    },
    parentType() {
      const { parentFnc } = this;
      return parentFnc("type");
    },
    parentIcon() {
      const { parentFnc } = this;
      return parentFnc("icon");
    }
  },
  mounted() {
    const parent = findComponentUpward(this, "Radio-Group");
    if (parent) {
      this.parent = parent;
    }
  }
};
</script>