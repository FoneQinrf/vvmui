<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-13 16:46:14
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-13 17:47:53
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
<template>
  <div :class="['vvm-Card',{shadow:shadow}]">
    <div v-if="isTitle" class="vvm-Card-title vvm-hairline-bottom">
      <div>
        <template v-if="$slots['title-left']">
          <slot name="title-left"></slot>
        </template>
        <template v-else>{{titleText}}</template>
      </div>
      <div>
        <slot name="title-right"></slot>
      </div>
    </div>
    <div class="vvm-Card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    titleText: {
      type: String,
      default: "标题"
    },
    isTitle: {
      type: Boolean,
      default: true
    },
    shadow: {
      type: Boolean
    }
  }
};
</script>