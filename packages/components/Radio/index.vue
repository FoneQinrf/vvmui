<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-10-30 13:32:05
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-11-04 15:38:15
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <label class="g7-Radio">
    <span
      :class="['g7-Radio-icon',`g7-text-color-${parentType}`,parentDisabled ? 'disabled' : '']"
    >
      <transition name="fade">
        <Icon v-show="active" :size="20" :icon="parentIcon" />
      </transition>
    </span>
    <span :class="['g7-Radio-text',parentDisabled ? 'disabled' : '']">
      <slot>{{label}}</slot>
    </span>
    <input
      v-if="parent"
      :disabled="parentDisabled"
      class="g7-Radio-input"
      :value="label"
      type="radio"
      :name="name"
      @change="change"
    />
    <input
      v-else
      :name="name"
      :disabled="parentDisabled"
      class="g7-Radio-input"
      type="radio"
      @change="change"
    />
  </label>
</template>

<script>
import Icon from "../Icon";
import { findComponentUpward } from "../../utils";
export default {
  name: "G-Radio",
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
    const parent = findComponentUpward(this, "G-Radio-Group");
    if (parent) {
      this.parent = parent;
    }
  }
};
</script>