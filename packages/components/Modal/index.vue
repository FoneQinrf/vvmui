<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 14:12:45
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="Am-Layer">
    <transition v-if="maskShow" name="fade">
      <div ref="ref" @click="click" v-show="value" class="Am-Layer-mask"></div>
    </transition>
    <transition :name="direction">
      <div v-show="value" :class="['Am-Layer-body',direction]">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
const direction = ["top", "left", "right", "bottom", "center"];
export default {
  name: "Modal",
  props: {
    value: {
      type: Boolean
    },
    maskShow: {
      type: Boolean,
      default: true
    },
    isMask: {
      type: Boolean
    },
    isMove: {
      type: Boolean
    },
    direction: {
      type: String,
      default: "center",
      validator(val) {
        return direction.includes(val);
      }
    }
  },
  methods: {
    click() {
      if (this.isMask) {
        this.$emit("input", false);
        this.$emit("on-mask");
      }
    }
  },
  mounted() {
    if (!this.isMove && this.value) {
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
      if (this.isMove) {
        return;
      }
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
  }
};
</script>