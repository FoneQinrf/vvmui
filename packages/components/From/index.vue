<!--
 * @Author: Fone丶峰
 * @Date: 2019-11-06 14:03:19
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-26 10:06:49
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="vvm-Form">
    <slot></slot>
  </div>
</template>

<script>
import { findComponentsDownward } from "../../utils";
const model = {};
export default {
  name: "From",
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
    },
    labelWidth: {
      type: Number
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
        let type = typeof this.model[key];
        if (type === "object") {
          type = this.model[key] instanceof Array ? "array" : "object";
        }
        model[key] = type;
      }
    },
    init() {
      const components = findComponentsDownward(this, "From-Item");
      if (components) {
        this.components = components;
      }
    },
    validateField(prop, eventName) {
      return new Promise(resolve => {
        this.components.map(item => {
          if (item.prop === prop) {
            item.validator(eventName).then(res => {
              resolve(res);
            });
          }
        });
      });
    },
    async validate(cb = () => {}) {
      const array = [];
      let i = 0;
      while (i < this.components.length) {
        const res = await this.components[i].validator();
        if (res !== "error") {
          i += 1;
        } else {
          i = this.components.length;
        }
        array.push(res);
      }
      cb(!array.includes("error"));
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
      this.clearValidate();
    },
    clearValidate() {
      this.components.map(item => {
        item.ruleState = "";
      });
    }
  }
};
</script>