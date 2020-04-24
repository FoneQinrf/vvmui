<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 10:04:43
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div ref="ref" class="vvm-PickerColumn-wrp" :style="PickerHeight">
    <ul class="vvm-PickerColumn-group" :style="styleY">
      <li
        v-for="(item,$index) in options"
        :key="$index"
        :style="style"
        :class="['vvm-PickerColumn-label',{'vvm-text-color-default':$index===curreIndex}]"
      >
        <span class="vvm-ellipsis">{{item[label] || item}}</span>
      </li>
    </ul>
    <i class="vvm-PickerColumn-top vvm-hairline-bottom" :style="maskHeight"></i>
    <i class="vvm-PickerColumn-bottom vvm-hairline-top" :style="maskHeight"></i>
  </div>
</template>

<script>
import {
  onTouchstart,
  onTouchmove,
  onTouchend,
  off,
  on
} from "../../../utils/event";
import mixins from "./mixins";

const range = (num, arr) => Math.min(Math.max(num, arr[0]), arr[1]);

function isMobile() {
  if (
    /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)
  ) {
    return true;
  }
  return false;
}

export default {
  name: "v-Picker",
  mixins: [mixins],
  data() {
    return {
      startY: 0,
      offset: 0,
      startOffset: 0,
      curreIndex: this.index,
      flag: false
    };
  },
  props: {
    thisIndex: {},
    index: {
      type: Number,
      default: 0
    }
  },
  methods: {
    onTouchstart(e) {
      this.startY = e.clientY || e.touches[0].clientY;
      this.startOffset = this.offset;
      if (!isMobile()) {
        this.flag = true;
      }
    },
    onTouchmove(e) {
      if (!this.flag && !isMobile()) {
        return;
      }
      const Y = e.clientY || e.touches[0].clientY;
      const deltaY = Y - this.startY;
      this.offset = range(this.startOffset + deltaY, [
        -(this.count * this.height),
        this.height * 4
      ]);
    },
    onTouchend() {
      if (!isMobile()) {
        this.flag = false;
      }
      if (this.offset !== this.startOffset) {
        const index = range(Math.round((-this.offset + 56) / this.height), [
          0,
          this.count - 1
        ]);
        this.setIndex(index, true);
      }
    },
    setIndex(index, userAction) {
      index = range(index, [0, this.count - 1]);
      this.offset = (2 - index) * this.height;
      if (index !== this.curreIndex) {
        this.curreIndex = index;
        if (userAction) {
          this.$emit(
            "on-change",
            this.thisIndex ? [this.thisIndex, index] : index
          );
        }
      }
    },
    indexChange() {
      if (this.curreIndex >= this.options.length) {
        this.offset = (3 - this.options.length) * this.height;
        return;
      }
      this.offset = (2 - this.curreIndex) * this.height;
    }
  },
  computed: {
    count() {
      return this.options.length;
    },
    styleY() {
      return {
        transform: `translateY(${this.offset}px)`
      };
    },
    style() {
      return {
        height: `${this.height}px`
      };
    },
    maskHeight() {
      return {
        height: `${this.height * 2}px`
      };
    }
  },
  mounted() {
    this.indexChange();
    onTouchstart(this.$el, this.onTouchstart);
    onTouchmove(this.$el, this.onTouchmove);
    onTouchend(this.$el, this.onTouchend);
    on(this.$el, "touchcancel", this.onTouchend);
    //on(this.$el, "mouseleave", this.onTouchend);
  },
  watch: {
    options() {
      this.curreIndex = 0;
      this.indexChange();
    },
    index(val) {
      this.curreIndex = val;
      this.indexChange();
    }
  },
  destroyed() {
    off(this.$el, "touchstart", this.onTouchstart);
    off(this.$el, "mousedown", this.onTouchstart);
    off(this.$el, "touchmove", this.onTouchmove);
    off(this.$el, "mousemove", this.onTouchmove);
    off(this.$el, "touchend", this.onTouchend);
    off(this.$el, "mouseup", this.onTouchend);
    off(this.$el, "touchcancel", this.onTouchend);
    //off(this.$el, "mouseleave", this.onTouchend);
  }
};
</script>