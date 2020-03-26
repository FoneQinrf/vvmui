<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-06 14:35:20
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-11-07 14:00:25
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <button :disabled="tagDisabled" @click="click" :class="clasess">
    <span class="g7-loading" v-show="currentLoading">
      <Icon icon="iconloading" />
    </span>
    <span :class="[this.plain ? `g7-text-color-${this.type}` : '']">
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
  name: "G-Button",
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
        "g7-Button",
        `g7-Button-type-${this.type}`,
        this.plain ? `g7-Button-plain g7-border-color-${this.type}` : "",
        {
          "g7-Button-round": this.round,
          "g7-Button-disabled": this.tagDisabled,
          "g7-Button-long": this.long
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

