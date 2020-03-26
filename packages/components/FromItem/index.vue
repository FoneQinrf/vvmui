<!--
 * @Descripttion: From-Item
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-10-22 13:26:00
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-25 17:42:21
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div :class="['g7-From-Item',{'cellInline':cellInline,'block':!cellInline}]">
    <div class="g7-From-Item-label">
      <span class="g7-From-Item-label-required" v-if="required">*</span>
      <slot name="label">{{label}}</slot>
      <span
        v-if="!cellInline"
        :class="['g7-From-Item-statusIcon',{'success': ruleState === 'success'},{'cellInline':!cellInline}]"
        v-show="statusIcon"
      >
        <transition name="fade" mode="out-in">
          <Icon v-if="ruleState === 'success'" key="success" :icon="successIcon" :size="12" />
          <Icon v-if="ruleState === 'error'" key="error" :icon="errorIcon" :size="12" />
        </transition>
      </span>
    </div>
    <div :class="['g7-From-Item-body',{'statusIcon':statusIcon}]">
      <slot></slot>
      <transition name="slide-fade">
        <label class="g7-From-Item-message g7-ellipsis" v-if="ruleState === 'error'">{{message}}</label>
      </transition>
      <span
        v-if="cellInline"
        :class="['g7-From-Item-statusIcon',{'success': ruleState === 'success'},{'cellInline':!cellInline}]"
        v-show="statusIcon"
      >
        <transition name="fade" mode="out-in">
          <Icon v-if="ruleState === 'success'" key="success" :icon="successIcon" :size="12" />
          <Icon v-if="ruleState === 'error'" key="error" :icon="errorIcon" :size="12" />
        </transition>
      </span>
    </div>
  </div>
</template>

<script>
import AsyncValidator from "async-validator";
import { findComponentUpward } from "../../utils";
import Icon from "../Icon";

export default {
  name: "G-From-Item",
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
    }
  },
  data() {
    return {
      parent: "",
      validators: this.rule,
      eventName: "",
      itemVal: undefined,
      ruleState: "",
      message: "",
      source: "",
      required: false
    };
  },
  watch: {
    rule(val) {
      this.validators = val;
      this.parentRule();
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
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const parent = findComponentUpward(this, "G-From");
      if (parent) {
        this.parent = parent;
        this.itemVal = parent.model[this.prop] || "";
      }
      this.requiredFnc();
    },
    validator(eventName = this.eventName) {
      return new Promise(resolve => {
        const rules = this.eventNameFnc(eventName);
        if ((!rules && rules.length === 0) || this.required === false) {
          this.ruleState = "success";
          resolve(this.ruleState);
          return true;
        }

        rules.forEach(element => {
          delete element.trigger;
        });
        const descriptor = {};
        descriptor[this.prop] = rules;
        const validator = new AsyncValidator(descriptor);
        const model = {};
        model[this.prop] = this.itemVal;
        validator
          .validate(model, { firstFields: true }, errors => {
            this.ruleState = !errors ? "success" : "error";
            this.message = errors ? errors[0].message : "";
            resolve(this.ruleState);
          })
          .then(() => {
            this.ruleState = "success";
            resolve(this.ruleState);
          })
          .catch(({ errors }) => {
            this.ruleState = !errors ? "success" : "error";
            this.message = errors ? errors[0].message : "";
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
        return this.validators.concat(rule);
      }
    },
    /**
     * 判断数据中 required === true
     */
    requiredFnc() {
      const rules = this.parentRule() || this.validators;
      const array = rules.map(item => {
        return item.required;
      });
      this.required = array.includes(true);
    },
    /**
     * 过滤不需要校验的数据
     */
    eventNameFnc(eventName) {
      const rules = this.parentRule() || this.validators;
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