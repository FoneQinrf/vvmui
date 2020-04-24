<!--
 * @Author: Fone丶峰
 * @Date: 2020-02-24 09:29:17
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 16:20:38
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="vvm-Calendar">
    <div @click="openCalendar" class="vvm-Calendar-text vvm-ellipsis">
      <Input
        readonly
        :right-icon="rightArrow ? 'iconlist-rigthl' : ''"
        :disabled="disabled"
        v-model="modelValue"
        :placeholder="placeholder"
      />
    </div>
    <Modal v-if="!disabled" direction="bottom" isMask v-model="show" @on-mask="close">
      <div class="vvm-Calendar-wrp">
        <div class="vvm-Calendar-model-top">
          <div class="vvm-Calendar-title">
            <div class="title">{{ titleText }}</div>
            <span @click="close" class="vvm-Calendar-close">
              <Icon icon="iconcuowu" />
            </span>
          </div>
          <div class="vvm-Calendar-week vvm-hairline-bottom" ref="title">
            <span
              v-for="(item,$index) in weekList"
              :key="$index"
              :class="['item',item.class]"
            >{{item.name}}</span>
          </div>
        </div>
        <DateList
          ref="DateList"
          :scroll-top="scrollTop"
          :scrollBottom="scrollBottom"
          :options="value"
          :date="dateList"
          :locationDate="locationDate"
        >
          <template slot="dateItem" slot-scope="{item}">
            <li
              v-for="(param,index) in item"
              :key="index+'B'"
              :style="style(index,param.week)"
              :class="clasess(param)"
              @click="clickDate(index,param)"
            >
              <div class="vvm-Calendar-DateList-day-render">
                <slot name="dateItem" :node="param">
                  <span>{{param.day}}</span>
                </slot>
              </div>
            </li>
          </template>
          <div class="vvm-Calendar-DateList-bottom">
            <slot>
              <ul class="vvm-Calendar-value">
                <template v-if="type === 'range'">
                  <li class="startValue">
                    {{startText}}：
                    <template v-if="options.length === 1 || options.length === 2">
                      <span>{{options[0].year}}年{{options[0].month}}月{{options[0].day}}日</span>
                      <span>星期{{options[0].week}}</span>
                    </template>
                  </li>
                  <li class="endValue">
                    {{endText}}：
                    <template v-if="options.length === 2">
                      <span>{{options[1].year}}年{{options[1].month}}月{{options[1].day}}日</span>
                      <span>星期{{options[1].week}}</span>
                    </template>
                  </li>
                </template>
                <template v-else>
                  <li class="startValue">
                    {{singleText}}：
                    <template v-if="options.year">
                      <span>{{options.year}}年{{options.month}}月{{options.day}}日</span>
                      <span>星期{{options.week}}</span>
                    </template>
                  </li>
                </template>
              </ul>
            </slot>
            <div class="vvm-Calendar-confirm" @click="confirm">
              <span>{{confirmText}}</span>
            </div>
          </div>
        </DateList>
      </div>
    </Modal>
  </div>
</template>

<script>
import Modal from "@/components/Modal";
import Icon from "@/components/Icon";
import Toast from "@/components/~Toast";
import emitter from "@/utils/emitter";
import Input from "@/components/Input";
import mixins from "./components/mixins";
import {
  weekList,
  optionsFnc,
  initDate,
  getPreMonthList,
  getNextMonthList
} from "./components/utils";
import DateList from "./components/DateList";
export default {
  name: "Calendar",
  components: { Modal, Icon, DateList, Input },
  mixins: [mixins, emitter],
  props: {
    placeholder: {
      type: String,
      default: "请选择时间"
    },
    value: {
      type: [Array, String]
    },
    titleText: {
      type: String,
      default: "请选择日期"
    },
    locationDate: {
      type: String
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
    singleText: {
      type: String,
      default: "选中时间"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    rangeSeparator: {
      type: String,
      default: "至"
    },
    type: {
      type: String,
      default: "range",
      validator(val) {
        return ["range", "single"].includes(val);
      }
    },
    formatter: Function,
    rightArrow: Boolean
  },
  data() {
    return {
      show: false,
      weekList: weekList,
      dateList: [],
      currentValue: "",
      confirmValue: this.value || ""
    };
  },
  watch: {
    value(val) {
      this.confirmValue = val;
      this.init();
    },
    disabled() {
      this.init();
    }
  },
  computed: {
    modelValue() {
      if (this.type === "range" && this.confirmValue) {
        if (this.confirmValue.length !== 2) {
          return "";
        }
        return this.confirmValue.length
          ? `${this.confirmValue[0]}${this.rangeSeparator}${this.confirmValue[1]}`
          : "";
      }
      return this.confirmValue;
    }
  },
  methods: {
    close() {
      this.show = false;
      this.$emit("on-close");
    },
    confirm() {
      if (this.type === "range") {
        if (!this.currentValue && this.currentValue.length === 0) {
          Toast.info(`请选择${this.startText}`);
          return;
        }
        if (this.currentValue && this.currentValue.length === 1) {
          Toast.info(`请选择${this.endText}`);
          return;
        }
      } else {
        if (!this.currentValue) {
          Toast.info(`请选择时间`);
          return;
        }
      }
      this.show = false;
      this.confirmValue = this.currentValue;
      this.$emit("input", this.currentValue);
      this.$emit("on-confirm", this.currentValue);
      this.dispatch("From-Item", "change", this.currentValue);
    },
    initValue(val) {
      if (this.type === "range" && val) {
        this.options = val.length
          ? [optionsFnc(val[0]), optionsFnc(val[1])]
          : [];
        return;
      }
      if (val) {
        this.options = optionsFnc(val);
      }
    },
    openCalendar() {
      if (this.disabled) {
        return;
      }
      this.show = true;
      this.$emit("on-open");
      this.$refs.DateList.locationDateFnc();
    },
    scrollTop() {
      if (!this.oldDateDisabled) {
        this.dateList = getPreMonthList(this.dateList[0].name).concat(
          this.dateList
        );
        return true;
      }
      return false;
    },
    scrollBottom() {
      this.dateList = this.dateList.concat(
        getNextMonthList(this.dateList[this.dateList.length - 1].name)
      );
    },
    init() {
      if (!this.disabled) {
        this.dateList = initDate(this.locationDate, this.value, this.type);
        this.initValue(this.value);
      }
    }
  },
  mounted() {
    this.init();
  }
};
</script>