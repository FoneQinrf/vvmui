<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-08 11:43:00
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <button :disabled="tagDisabled" @click="click" :class="clasess">
    <span v-show="currentLoading" class="vvm-Button-loading">
      <Icon class="vvm-loading" icon="iconloading1" />
    </span>
    <span :class="[this.plain ? `vvm-button-text vvm-text-color-${this.type}` : 'vvm-button-text']">
      <template v-if="currentLoading">{{loadingText}}</template>
      <template v-else>
        <slot></slot>
      </template>
    </span>
  </button>
</template>
<script>
import links from "@/mixins/links";
import Icon from "@/components/Icon";
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
        "vvm-Button",
        `vvm-Button-type-${this.type}`,
        this.plain ? `vvm-Button-plain vvm-border-color-${this.type}` : "",
        {
          "vvm-Button-round": this.round,
          "vvm-Button-disabled": this.tagDisabled,
          "vvm-Button-long": this.long
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

