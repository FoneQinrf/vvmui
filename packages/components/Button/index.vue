<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-06 14:35:20
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-26 10:35:11
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <button :disabled="tagDisabled" @click="click" :class="clasess">
    <span class="Am-loading" v-show="currentLoading">
      <Icon icon="iconloading" />
    </span>
    <span :class="[this.plain ? `Am-text-color-${this.type}` : '']">
      <template v-if="currentLoading">{{loadingText}}</template>
      <template v-else>
        <slot></slot>
      </template>
    </span>
  </button>
</template>
<script>
import links from "../../mixins/links";
import Icon from "../Icon";
export default {
  name: "Button",
  components: { Icon },
  mixins: [links],
  props: {
    type: {
      type: String,
      default: "default",
      validator: function(value) {
        return ["default", "errer", "success", "warning", "text"].includes(
          value
        );
      }
    },
    disabled: {
      type: Boolean
    },
    radius: {
      type: Boolean
    },
    plain: {
      type: Boolean
    },
    round: {
      type: Boolean
    },
    loading: {
      type: Boolean
    },
    long: {
      type: Boolean
    },
    loadingText: {
      type: String,
      default: "加载中..."
    }
  },
  computed: {
    clasess() {
      return [
        "Am-Button",
        `Am-Button-type-${this.type}`,
        this.plain ? `Am-Button-plain Am-border-color-${this.type}` : "",
        {
          "Am-Button-round": this.round,
          "Am-Button-disabled": this.tagDisabled,
          "Am-Button-long": this.long
        }
      ];
    },
    tagDisabled() {
      const { disabled, currentLoading } = this;
      return disabled || currentLoading;
    }
  },
  methods: {
    click() {
      this.$emit("click");
      this.handleLink();
    },
    showLoading() {
      this.currentLoading = true;
    },
    removeLoading() {
      this.currentLoading = false;
    }
  },
  data() {
    return {
      currentLoading: this.loading
    };
  },
  watch: {
    loading(val) {
      this.currentLoading = val;
    }
  }
};
</script>

