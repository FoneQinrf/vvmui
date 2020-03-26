<!--
 * @Author: Fone丶峰
 * @Date: 2020-02-24 14:36:14
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-03 16:59:17
 * @Description: 
 * @Email: qinrifeng@g7.com.cn
 -->
<template>
  <div class="g7-Calendar-DateList-wrp">
    <div class="g7-Calendar-DateList" ref="scroll">
      <div v-for="(item,$index) in date" :key="$index+'A'" :ref="$index">
        <div class="g7-Calendar-DateList-item-title">
          <b>{{item.name}}</b>
        </div>
        <ul class="g7-Calendar-DateList-item">
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
          const height = this.$refs["0"][0].offsetHeight;
          this.$refs.scroll.scrollTop = height * (index + 1) - 82;
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