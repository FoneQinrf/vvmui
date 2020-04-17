 <!--
 * @Author: Fone丶峰
 * @Date: 2020-04-15 13:40:51
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-17 14:37:57
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
<template>
  <div class="Am-DatetimePicker">
    <div @click="click" class="Am-DatetimePicker-input">
      <Input readonly :disabled="disabled" v-model="currentValue" :placeholder="placeholder" />
    </div>
    <Modal v-if="!disabled" direction="bottom" isMask v-model="show">
      <template>
        <div class="Am-DatetimePicker-title">
          <span @click="onCancel" class="cancel-text">{{cancelText}}</span>
          <span @click="onConfirm" class="confirm-text Am-text-color-default">{{confirmText}}</span>
        </div>
        <div class="Am-Picker-body">
          <Am-Picker
            v-for="(item,$index) in options"
            :options="item"
            :height="height"
            :index="index[$index] || 0"
            :key="$index"
            :thisIndex="$index+1"
            @on-change="change"
            :ref="$index"
          />
        </div>
      </template>
    </Modal>
  </div>
</template>

<script>
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import AmPicker from "@/components/Picker/src/component";
import emitter from "@/utils/emitter";
import {
  createYear,
  format,
  createMonth,
  createTimeItem,
  createDay,
  createIndex,
  createHours,
  createMinute
} from "./src/utils";
export default {
  name: "DatetimePicker",
  components: { Input, Modal, AmPicker },
  mixins: [emitter],
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: Boolean,
    cancelText: {
      type: String,
      default: "取消"
    },
    confirmText: {
      type: String,
      default: "确认"
    },
    minYear: {
      type: Number,
      default: 1969
    },
    maxYear: {
      type: Number,
      default: 2025
    },
    type: {
      type: String,
      default: "date",
      validator(val) {
        return ["date", "datetime", "time"].includes(val);
      }
    },
    value: {
      type: String
    },
    height: Number,
    formatter: {
      type: Function
    }
  },
  data() {
    return {
      show: false,
      options: [],
      currentValue: this.value,
      timeItem: createTimeItem(this.value),
      index: []
    };
  },
  watch: {
    minYear() {
      this.initOptions();
    },
    maxYear() {
      this.initOptions();
    },
    value(val) {
      this.currentValue = val;
      this.timeItem = createTimeItem(val);
      this.index = createIndex(this);
    },
    type() {
      this.initOptions();
      this.index = createIndex(this);
    }
  },
  methods: {
    change(val) {
      const [i, item] = val;
      const index = i - 1;
      this.$set(this.index, index, item);
      const label = this.options[index][item];
      if (this.type === "time") {
        this.$set(this.timeItem, index + 3, label);
      } else {
        this.$set(this.timeItem, index, label);
      }
      if (this.type !== "time" && [0, 1].includes(index)) {
        this.initDay();
        this.$set(this.timeItem, 2, this.options[2][0]);
      }
      this.$emit("on-change", this.fncTime());
    },
    fncTime() {
      const [YYYY, mm, dd, HH, MM, SS] = this.timeItem;
      const formatFnc = {
        date: () => {
          return `${YYYY}/${mm}/${dd}`;
        },
        datetime: () => {
          return `${YYYY}/${mm}/${dd} ${HH}:${MM}:${SS}`;
        },
        time: () => {
          return `${HH}:${MM}:${SS}`;
        }
      };
      return this.formatter
        ? this.formatter(formatFnc[this.type]())
        : this.formatterFnc(`${YYYY}/${mm}/${dd} ${HH}:${MM}:${SS}`);
    },
    formatterFnc(val) {
      const date = val ? new Date(val) : new Date();
      const formatFnc = {
        date: () => {
          return format("YYYY/mm/dd", date);
        },
        datetime: () => {
          return format("YYYY/mm/dd HH:MM:SS", date);
        },
        time: () => {
          return format("HH:MM:SS", date);
        }
      };
      return formatFnc[this.type]();
    },
    onCancel() {
      this.show = false;
      this.$emit("on-cancel");
    },
    onConfirm() {
      const value = this.fncTime();
      this.currentValue = value;
      this.show = false;
      this.$emit("input", this.currentValue);
      this.$emit("on-confirm", this.currentValue);
      this.dispatch("From-Item", "change", this.currentValue);
    },
    click() {
      if (this.disabled) {
        return;
      }
      this.show = true;
      this.$emit("on-show");
    },
    initOptions() {
      this.options = [];
      const typeFnc = {
        date: () => {
          const year = createYear(this);
          const month = createMonth();
          this.$set(this.options, 0, year);
          this.$set(this.options, 1, month);
          this.initDay();
        },
        datetime: () => {
          typeFnc.date();
          const hours = createHours();
          const minute = createMinute();
          this.$set(this.options, 3, hours);
          this.$set(this.options, 4, minute);
          this.$set(this.options, 5, minute);
        },
        time: () => {
          const hours = createHours();
          const minute = createMinute();
          this.$set(this.options, 0, hours);
          this.$set(this.options, 1, minute);
          this.$set(this.options, 2, minute);
        }
      };
      typeFnc[this.type]();
    },
    initDay() {
      const day = createDay(this);
      this.$set(this.options, 2, day);
    }
  },
  mounted() {
    if (!this.disabled) {
      this.initOptions();
      this.index = createIndex(this);
    }
  }
};
</script>