<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 09:56:22
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="vvm-Loading-spin">
    <transition name="fade">
      <div v-show="show" class="vvm-spin-mask"></div>
    </transition>
    <transition name="fade">
      <div v-show="show" class="vvm-spin-body">
        <div :class="['vvm-spin-icon',{'vvm-loading':!img}]">
          <template v-if="img">
            <img :src="img" />
          </template>
          <template v-else>
            <Icon :icon="icon" :size="36" color="#fff" />
          </template>
        </div>
        <div class="vvm-spin-context">{{this.context}}</div>
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