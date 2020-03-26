<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-09-25 15:13:48
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-11-07 13:58:44
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="g7-Loading-spin">
    <transition name="fade">
      <div v-show="show" class="g7-spin-mask"></div>
    </transition>
    <transition name="fade">
      <div v-show="show" class="g7-spin-body">
        <div :class="['g7-spin-icon',{'g7-loading':!img}]">
          <template v-if="img">
            <img :src="img" />
          </template>
          <template v-else>
            <Icon :icon="icon" :size="36" color="#fff" />
          </template>
        </div>
        <div class="g7-spin-context">{{this.context}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from "../../Icon";
export default {
  components: { Icon },
  props: {
    icon: {
      type: String,
      default: "iconzhuangtaijiazai"
    },
    context: {
      type: String
    },
    img: {
      type: String
    },
    show: {
      type: Boolean
    }
  }
};
</script>