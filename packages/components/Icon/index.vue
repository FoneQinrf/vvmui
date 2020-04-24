<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:27
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:00:38
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <i :class="clasess" :style="style"></i>
</template>
<script>
export default {
  name: "Icon",
  props: {
    icon: {
      type: String
    },
    color: {
      type: String
    },
    size: {
      type: Number,
      default: 14
    }
  },
  computed: {
    clasess() {
      return `vvm-iconfont ${this.icon}`;
    },
    style() {
      const witdh = document.body.clientWidth;
      return {
        color: this.color,
        fontSize: `${(this.size * 100) / witdh}vw`
      };
    }
  }
};
</script>