<!--
 * @Author: Fone丶峰
 * @Date: 2019-11-06 14:03:19
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-26 10:30:58
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div :class="['vvm-From-Item',{'cellInline':cellInline,'block':!cellInline}]">
    <div class="vvm-From-Item-label" :style="style">
      <span class="vvm-From-Item-label-required" v-if="required">*</span>
      <slot name="label">{{label}}</slot>
      <span
        v-if="!cellInline"
        :class="['vvm-From-Item-statusIcon',ruleState,{'cellInline':!cellInline}]"
        v-show="statusIcon"
      >
        <transition name="fade" mode="out-in">
          <Icon v-if="ruleState === 'success'" key="success" :icon="successIcon" :size="12" />
          <Icon v-if="ruleState === 'error'" key="error" :icon="errorIcon" :size="12" />
        </transition>
      </span>
    </div>
    <div :class="['vvm-From-Item-body',{'statusIcon':statusIcon}]">
      <slot></slot>
      <transition name="slide-fade">
        <label class="vvm-From-Item-message vvm-ellipsis" v-if="ruleState === 'error'">{{message}}</label>
      </transition>
      <span
        v-if="cellInline"
        :class="['vvm-From-Item-statusIcon',ruleState,{'loading':loadingShow},{'cellInline':!cellInline}]"
        v-show="statusIcon"
      >
        <Icon :class="[loadingShow ? 'vvm-loading' : '']" :icon="icon" :size="12" />
      </span>
    </div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
import { findComponentUpward } from "../../utils";
import Icon from "../Icon";

export default {
  name: "From-Item",
  components: { Icon },
  props: {
    label: {
      type: String
    },
    prop: {
      type: String
    },
    rule: {
      type: Array,
      default() {
        return [];
      }
    },
    cellInline: {
      type: Boolean,
      default: true
    },
    labelWidth: {
      type: Number
    },
    validateLoading: {
      type: Boolean
    }
  },
  data() {
    return {
      parent: "",
      eventName: "",
      itemVal: undefined,
      ruleState: "",
      message: "",
      required: false,
      loadingShow: false
    };
  },
  watch: {
    rule() {
      this.requiredFnc();
    },
    rules() {
      this.requiredFnc();
    }
  },
  computed: {
    statusIcon() {
      if (this.parent) {
        return this.parent.statusIcon;
      }
      return false;
    },
    successIcon() {
      if (this.parent) {
        return this.parent.successIcon;
      }
      return false;
    },
    errorIcon() {
      if (this.parent) {
        return this.parent.errorIcon;
      }
      return false;
    },
    rules() {
      if (this.parent) {
        return this.parent.rules;
      }
      return this.rule;
    },
    style() {
      if (this.parent) {
        let width;
        if (!this.cellInline) {
          width = "100%";
        } else {
          width = this.labelWidth
            ? `${this.labelWidth}px`
            : `${this.parent.labelWidth}px`;
        }
        return {
          width
        };
      }
      return {
        width: "auto"
      };
    },
    icon() {
      if (this.loadingShow) {
        return "iconloading1";
      }
      if (this.ruleState === "success") {
        return this.successIcon;
      }
      if (this.ruleState === "error") {
        return this.errorIcon;
      }
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const parent = findComponentUpward(this, "From");
      if (parent) {
        this.parent = parent;
        this.itemVal = parent.model[this.prop] || "";
      }
      this.requiredFnc();
    },
    validator(eventName = this.eventName) {
      return new Promise(resolve => {
        const rules = this.eventNameFnc(eventName);
        if (!rules && rules.length === 0) {
          this.loadingShow = false;
          this.ruleState = "success";
          resolve(this.ruleState);
          return;
        }
        if (this.validateLoading) {
          this.loadingShow = true;
        }

        const descriptor = {};
        descriptor[this.prop] = rules;
        const validator = new AsyncValidator(descriptor);
        const model = {};
        model[this.prop] = this.itemVal;
        validator
          .validate(model, { firstFields: true }, errors => {
            this.ruleState = !errors ? "success" : "error";
            this.message = errors ? errors[0].message : "";
            this.loadingShow = false;
            resolve(this.ruleState);
          })
          .then(() => {
            this.ruleState = "success";
            this.loadingShow = false;
            resolve(this.ruleState);
          })
          .catch(({ errors }) => {
            this.ruleState = !errors ? "success" : "error";
            this.message = errors ? errors[0].message : "";
            this.loadingShow = false;
            resolve(this.ruleState);
          });
      });
    },
    /**
     * parent中对应的rule与当前组件rule合并
     */
    parentRule() {
      if (this.parent) {
        const rule = this.parent.rules[this.prop] || [];
        const array = [].concat(this.rule, rule);
        return array;
      }
    },
    /**
     * 判断数据中 required === true
     */
    requiredFnc() {
      const rules = this.parentRule();
      const array = rules.map(item => {
        return item.required;
      });
      this.required = array.includes(true);
    },
    /**
     * 过滤不需要校验的数据
     */
    eventNameFnc(eventName) {
      const rules = this.parentRule();
      return rules.filter(item => {
        if (!item.trigger || eventName === "") {
          return true;
        }
        if (Array.isArray(item.trigger)) {
          return item.trigger.indexOf(eventName) > -1;
        }
        return item.trigger === eventName;
      });
    }
  }
};
</script>