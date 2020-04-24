<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-08 09:48:03
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 15:01:45
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->


<template>
  <div class="vvm-Calendar-DateList-wrp">
    <div class="vvm-Calendar-DateList" @scroll="onScroll" ref="scroll">
      <div>
        <div v-for="(item,$index) in date" :key="$index+'A'" :ref="$index">
          <div class="vvm-Calendar-DateList-item-title">
            <b>{{item.name}}</b>
          </div>
          <ul class="vvm-Calendar-DateList-item">
            <slot name="dateItem" :item="item.list"></slot>
          </ul>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import scroll from "@/utils/scroll.js";
import { getDate } from "./utils";
/* eslint-disable */
function sum(arr) {
  return arr.reduce(function(prev, curr, idx, arr) {
    return prev + curr;
  });
}
/* eslint-disable */
export default {
  name: "DateList",
  props: {
    date: {
      type: Array
    },
    locationDate: {
      type: Date,
      default() {
        return new Date();
      }
    },
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    scrollTop: Function,
    scrollBottom: Function
  },
  watch: {
    options() {
      this.locationDateFnc();
    }
  },
  data() {
    return {};
  },
  methods: {
    onScroll(e) {
      if (scroll(this.$refs.scroll, 4)) {
        this.scrollBottom();
        return
      }
      if (e.target.scrollTop < 4) {
        const flag = this.scrollTop();
        if (flag) {
          this.$nextTick(() => {
            e.target.scrollTop = this.heightItem()[0];
          });
        }
      }
    },
    heightItem() {
      const array = [];
      this.date.forEach((element, i) => {
        array.push(this.$refs[i][0].offsetHeight);
      });
      return array;
    },
    locationDateFnc() {
      const index = this.locationIndex();
      if (index) {
        this.$nextTick(() => {
          const array = [];
          this.date.forEach((element, i) => {
            array.push(this.$refs[i][0].offsetHeight);
          });
          let height = 0;
          for (let i = 0; i < index; i += 1) {
            height += array[i];
          }
          this.$refs.scroll.scrollTop = height;
        });
      }
    },
    locationIndex() {
      let date;
      if (this.options.length === 0) {
        date = getDate(this.locationDate);
      } else {
        date = getDate(new Date(this.options[0]));
      }
      let index;
      for (let i = 0; i < this.date.length; i += 1) {
        if (this.date[i].name === date) {
          index = i;
          break;
        }
      }
      return index;
    }
  }
};
</script>