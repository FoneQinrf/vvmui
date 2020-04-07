<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-27 20:09:04
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-07 13:40:15
 * @Description: 
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->

<template>
  <div class="Am-Calendar-DateList-wrp">
    <div class="Am-Calendar-DateList" ref="scroll">
      <div v-for="(item,$index) in date" :key="$index+'A'" :ref="$index">
        <div class="Am-Calendar-DateList-item-title">
          <b>{{item.name}}</b>
        </div>
        <ul class="Am-Calendar-DateList-item">
          <slot name="dateItem" :item="item.list"></slot>
        </ul>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import { getDate } from "./utils";
export default {
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
    }
  },
  watch: {
    options() {
      this.locationDateFnc();
    }
  },
  methods: {
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