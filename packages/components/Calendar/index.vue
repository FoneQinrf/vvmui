<!--
 * @Author: Fone丶峰
 * @Date: 2020-02-20 12:05:54
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-27 14:53:23
 * @Description: 
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="Am-Calendar">
    <div
      @click="openCalendar"
      :class="['Am-Calendar-text Am-ellipsis',{placeholder:confirmValue.length === 0},{disabled:disabled}]"
    >
      <template
        v-if="confirmValue.length > 0"
      >{{confirmValue[0]}}{{rangeSeparator}}{{confirmValue[1]}}</template>
      <template v-else>{{ placeholder }}</template>
    </div>
    <Layer direction="bottom" isMask v-model="show" @on-mask="close">
      <div class="Am-Calendar-wrp">
        <div class="Am-Calendar-model-top">
          <div class="Am-Calendar-title">
            <div class="title">{{ titleText }}</div>
            <span @click="close" class="Am-Calendar-close">
              <Icon icon="iconcuowu" />
            </span>
          </div>
          <div class="Am-Calendar-week Am-hairline-bottom" ref="title">
            <span
              v-for="(item,$index) in weekList"
              :key="$index"
              :class="['item',item.class]"
            >{{item.name}}</span>
          </div>
        </div>
        <DateList ref="DateList" :options="value" :date="dateList" :locationDate="locationDate">
          <template slot="dateItem" slot-scope="{item}">
            <li
              v-for="(param,index) in item"
              :key="index+'B'"
              :style="style(index,param.week)"
              :class="clasess(param)"
              @click="clickDate(index,param)"
            >
              <div class="Am-Calendar-DateList-day-render">
                <slot name="dateItem" :node="param">
                  <span>{{param.day}}</span>
                </slot>
              </div>
            </li>
          </template>
          <div class="Am-Calendar-DateList-bottom">
            <slot>
              <ul class="Am-Calendar-value">
                <li class="startValue">
                  {{startText}}：
                  <template
                    v-if="currentValue.length === 1 || currentValue.length === 2"
                  >
                    <span>{{currentValue[0].year}}年{{currentValue[0].month}}月{{currentValue[0].day}}日</span>
                    <span>星期{{currentValue[0].week}}</span>
                  </template>
                </li>
                <li class="endValue">
                  {{endText}}：
                  <template v-if="currentValue.length === 2">
                    <span>{{currentValue[1].year}}年{{currentValue[1].month}}月{{currentValue[1].day}}日</span>
                    <span>星期{{currentValue[1].week}}</span>
                  </template>
                </li>
              </ul>
            </slot>
            <div class="Am-Calendar-confirm" @click="confirm">
              <span>{{confirmText}}</span>
            </div>
          </div>
        </DateList>
      </div>
    </Layer>
  </div>
</template>

<script>
import Layer from "../Layer";
import Icon from "../Icon";
import { weekList, dateList, getweekday } from "./components/utils";
import DateList from "./components/DateList";
import Toast from "../~Toast";
import mixins from "./components/mixins";
import emitter from "../../utils/emitter";
export default {
  name: "G-Calendar",
  components: { Layer, Icon, DateList },
  mixins: [mixins, emitter],
  props: {
    placeholder: {
      type: String,
      default: "请选择时间"
    },
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    titleText: {
      type: String,
      default: "请选择日期"
    },
    maxDate: {
      type: Date,
      default() {
        const date = new Date();
        return new Date(`${date.getFullYear() + 1}-${date.getMonth() + 1}`);
      }
    },
    minDate: {
      type: Date,
      default() {
        const date = new Date();
        return new Date(`${date.getFullYear() - 2}-${date.getMonth()}`);
      }
    },
    locationDate: {
      type: Date,
      default() {
        return new Date();
      }
    },
    disabledList: {
      type: Array,
      default() {
        return [];
      }
    },
    oldDateDisabled: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean
    },
    startText: {
      type: String,
      default: "开始日"
    },
    endText: {
      type: String,
      default: "结束日"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    rangeSeparator: {
      type: String,
      default: "至"
    }
  },
  data() {
    return {
      show: false,
      weekList: weekList,
      dateList: [],
      currentValue: [],
      confirmValue: []
    };
  },
  watch: {
    value(val) {
      this.confirmValue = val;
      this.initValue(val);
    }
  },
  methods: {
    open() {
      if (this.disabled) {
        return;
      }
      this.show = true;
      this.$refs.DateList.locationDateFnc();
      this.$emit("on-show");
    },
    close() {
      this.show = false;
      if (this.confirmValue.length === 0) {
        this.options = [];
      }
      this.$emit("on-close");
    },
    openCalendar() {
      this.open();
    },
    change(val) {
      this.currentValue = val;
    },
    confirm() {
      if (this.currentValue.length === 0) {
        Toast.info(`请选择${this.startText}`);
        return;
      }
      if (this.currentValue.length === 1) {
        Toast.info(`请选择${this.endText}`);
        return;
      }
      const value = [
        `${this.currentValue[0].year}-${this.currentValue[0].month}-${this.currentValue[0].day}`,
        `${this.currentValue[1].year}-${this.currentValue[1].month}-${this.currentValue[1].day}`
      ];
      this.confirmValue = value;
      this.$emit("input", value);
      this.$emit("on-confirm", value);
      this.dispatch("From-Item", "change", value);
      this.show = false;
    },
    initValue(val) {
      if (val.length === 0) {
        return;
      }
      const start = val[0].split("-");
      const end = val[1].split("-");
      this.$nextTick(() => {
        this.options = [
          {
            year: start[0],
            month: start[1],
            day: start[2],
            week: getweekday(val[0])
          },
          {
            year: end[0],
            month: end[1],
            day: end[2],
            week: getweekday(val[1])
          }
        ];
      });
    }
  },
  mounted() {
    this.confirmValue = this.value;
    this.dateList = dateList(this);
    this.initValue(this.value);
  }
};
</script>