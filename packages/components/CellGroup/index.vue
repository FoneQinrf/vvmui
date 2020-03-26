<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-21 17:47:53
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-22 11:38:14
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="g7-CellGroup">
    <div class="g7-CellGroup-title">{{title}}</div>
    <ul class="g7-Cell-wrp">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: "G-Cell-Group",
  props: {
    title: {
      type: String
    }
  }
};
</script>