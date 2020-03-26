<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-09-02 10:45:52
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-03 10:12:20
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="g7-Toast">
    <template v-if="mask">
      <transition name="fade">
        <div v-show="value" class="g7-Toast-mask"></div>
      </transition>
    </template>
    <transition name="fade">
      <div v-show="value" :class="['g7-Toast-body',type]">
        <div class="g7-Toast-iconfont" v-show="type">
          <Icon :icon="iconfont" :size="26" color="#fff" />
        </div>
        <div class="g7-Toast-context">{{context}}</div>
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