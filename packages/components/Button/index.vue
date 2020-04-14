<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 09:57:42
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <button :disabled="tagDisabled" @click="click" :class="clasess">
    <Icon v-show="currentLoading" class="Am-loading" icon="iconloading1" />
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

