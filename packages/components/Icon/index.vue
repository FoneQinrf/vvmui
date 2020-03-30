<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-16 14:28:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-30 10:01:12
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
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
      return `Am-iconfont ${this.icon}`;
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