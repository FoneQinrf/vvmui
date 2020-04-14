<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 09:57:08
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="Am-Toast">
    <template v-if="mask">
      <transition name="fade">
        <div v-show="value" class="Am-Toast-mask"></div>
      </transition>
    </template>
    <transition name="fade">
      <div v-show="value" :class="['Am-Toast-body',type]">
        <div class="Am-Toast-iconfont" v-show="type">
          <Icon :icon="iconfont" :size="26" color="#fff" />
        </div>
        <div class="Am-Toast-context">{{context}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from "../Icon";
export default {
  components: { Icon },
  props: {
    type: {
      type: String,
      validator: function(value) {
        return ["success", "errer", "warning", "loading"].includes(value);
      }
    },
    value: {
      type: Boolean
    },
    context: {
      type: String
    },
    icon: {
      type: String
    },
    mask: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    iconfont() {
      if (this.icon) {
        return this.icon;
      }
      const icon = {
        success: "iconzhengque",
        errer: "iconcuowu",
        warning: "iconinfo",
        loading: ""
      };
      return icon[this.type];
    }
  }
};
</script>