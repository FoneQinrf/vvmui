<!--
 * @Author: Fone丶峰
 * @Date: 2020-01-02 15:39:54
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 11:53:45
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <label class="vvm-Checkbox">
    <span
      :class="['vvm-Checkbox-icon',`vvm-text-color-${parentType}`,{['disabled']:parenDisabled}]"
    >
      <transition name="fade">
        <Icon v-show="currentValue" :icon="parentIcon" />
      </transition>
    </span>
    <span :class="['vvm-Checkbox-text',{['disabled']:parenDisabled}]">
      <slot>{{label}}</slot>
    </span>
    <input
      v-if="parent"
      type="checkbox"
      :value="label"
      class="vvm-Checkbox-input"
      @change="change"
      v-model="model"
      :disabled="parenDisabled"
    />
    <input
      v-else
      type="checkbox"
      class="vvm-Checkbox-input"
      :checked="currentValue"
      @change="change"
      :disabled="parenDisabled"
    />
  </label>
</template>

<script>
import Icon from "@/components/Icon";
import { findComponentUpward } from "@/utils";
import { type } from "@/mixins/props";
import dispatch from "@/components/Emitter";
export default {
  name: "Checkbox",
  components: { Icon },
  mixins: [type],
  data() {
    return {
      parent: "",
      currentValue: this.value,
      model: []
    };
  },
  props: {
    label: {
      type: [String, Number, Boolean]
    },
    icon: {
      type: String,
      default: "iconselected"
    },
    value: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    }
  },
  watch: {
    value(val) {
      this.currentValue = val;
    },
    model(val) {
      for (let i = 0; i < val.length; i += 1) {
        if (!this.label) {
          return;
        }
        if (val[i] === this.label) {
          this.currentValue = true;
          break;
        }
        this.currentValue = false;
      }
    }
  },
  methods: {
    /**
     * 根据入参判断CheckboxGroup组件是否有指定的的值
     */
    parentFnc(options, value) {
      if (value) {
        return this.parent[options] === value
          ? this[options]
          : this.parent[options];
      }
      return this.parent[options] ? this.parent[options] : this[options];
    },
    active() {
      return typeof this.currentValue !== "undefined";
    },
    change(e) {
      if (this.parenDisabled) {
        return;
      }
      //如果存在父组件的实例，则触发父组件对应的方法
      if (this.parent) {
        this.parent.change(this.model);
        return;
      }
      this.currentValue = e.target.checked;
      this.$emit("input", this.currentValue);
      this.$emit("on-change", this.currentValue);
      dispatch("From-Item", "change", this.currentValue, this);
    }
  },
  computed: {
    parentIcon() {
      if (this.parent) {
        const { parentFnc } = this;
        return parentFnc("icon", "iconselected");
      }
      return this.icon;
    },
    parentType() {
      if (this.parent) {
        const { parentFnc } = this;
        return parentFnc("type", "default");
      }
      return this.type;
    },
    parenDisabled() {
      if (this.parent) {
        const { parentFnc } = this;
        return parentFnc("disabled");
      }
      return this.disabled;
    }
  },
  mounted() {
    const parent = findComponentUpward(this, "Checkbox-Group");
    if (parent) {
      this.parent = parent;
      parent.updateModel();
    }
  }
};
</script>