<!--
 * @Author: Fone丶峰
 * @Date: 2019-11-05 10:53:12
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-25 14:00:39
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <label class="vvm-Radio">
    <span :class="['vvm-Radio-icon',`vvm-text-color-${parentType}`,parentDisabled ? 'disabled' : '']">
      <transition name="fade">
        <Icon v-show="active" :icon="parentIcon" />
      </transition>
    </span>
    <span :class="['vvm-Radio-text',parentDisabled ? 'disabled' : '']">
      <slot>{{label}}</slot>
    </span>
    <input
      v-if="parent"
      :disabled="parentDisabled"
      class="vvm-Radio-input"
      :value="label"
      type="radio"
      name="radio"
      @change="change"
    />
    <input
      v-else
      name="radio"
      :disabled="parentDisabled"
      class="vvm-Radio-input"
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
      type: [String, Number, Boolean]
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
        : this.currentValue || this.currentValue === 0;
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