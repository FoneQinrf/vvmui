<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-12 10:31:39
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="vvm-Model">
    <transition v-if="maskShow" name="fade">
      <div ref="ref" @click="click" v-show="currentValue" class="vvm-Model-mask"></div>
    </transition>
    <transition :name="`vvm-model-${direction}`">
      <div v-show="currentValue" :class="['vvm-Model-body',direction]">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
const direction = ["top", "left", "right", "bottom", "center"];
export default {
  name: "Model",
  props: {
    value: {
      type: Boolean
    },
    maskShow: {
      type: Boolean,
      default: true
    },
    isClickMask: {
      type: Boolean
    },
    lockScroll: {
      type: Boolean
    },
    direction: {
      type: String,
      default: "center",
      validator(val) {
        return direction.includes(val);
      }
    },
    routerChangeClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentValue: this.value
    };
  },
  methods: {
    click() {
      if (this.isClickMask) {
        this.currentValue = false;
        this.$emit("input", this.currentValue);
        this.$emit("on-mask");
      }
    }
  },
  mounted() {
    if (!this.lockScroll && this.value) {
      this.$el.addEventListener(
        "touchmove",
        e => {
          e.preventDefault();
        },
        false
      );
    }
  },
  destroyed() {
    this.$el.removeEventListener("touchmove", e => {
      e.preventDefault();
    });
  },
  watch: {
    value(val) {
      this.currentValue = val;
      if (val) {
        this.$el.addEventListener(
          "touchmove",
          e => {
            e.preventDefault();
          },
          false
        );
      } else {
        this.$el.removeEventListener("touchmove", e => {
          e.preventDefault();
        });
      }
    }
  },
  $route() {
    if (this.routerChangeClose) {
      this.currentValue = false;
      this.$emit("input", this.currentValue);
    }
  }
};
</script>