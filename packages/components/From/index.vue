<!--
 * @Descripttion: From
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-10-22 13:26:00
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-25 17:49:32
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <form class="g7-Form">
    <slot></slot>
  </form>
</template>

<script>
import { findComponentsDownward } from "../../utils";
const model = {};
export default {
  name: "G-From",
  data() {
    return {
      components: ""
    };
  },
  props: {
    rules: {
      type: Object,
      default() {
        return {};
      }
    },
    model: {
      type: Object,
      default() {
        return {};
      }
    },
    statusIcon: {
      type: Boolean
    },
    successIcon: {
      type: String,
      default: "iconuncheck"
    },
    errorIcon: {
      type: String,
      default: "iconcuowu"
    }
  },
  watch: {
    model: {
      handler(val) {
        this.resetModel();
        this.components.map(item => {
          item.itemVal = val[item.prop];
        });
      },
      deep: true
    }
  },
  mounted() {
    this.init();
    this.resetModel();
  },
  methods: {
    resetModel() {
      for (const key in this.model) {
        model[key] = typeof this.model[key];
      }
    },
    init() {
      const components = findComponentsDownward(this, "G-From-Item");
      if (components) {
        this.components = components;
      }
    },
    validateField(prop, eventName) {
      this.components.map(item => {
        if (item.prop === prop) {
          item.validator(eventName);
        }
      });
    },
    async validate(cb) {
      const array = [];
      this.components.forEach(element => {
        array.push(element.validator());
      });
      const result = await Promise.all(array);
      cb(!result.includes("error"));
    },
    resetFields() {
      const type = {
        string: "",
        array: [],
        object: {},
        number: ""
      };
      for (const key in this.model) {
        this.model[key] = type[model[key]];
      }
    },
    clearValidate() {
      this.components.map(item => {
        item.message = "";
      });
    }
  }
};
</script>