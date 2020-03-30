<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-21 17:47:53
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-30 14:35:37
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <div class="Am-CellGroup">
    <div v-if="title" class="Am-CellGroup-title">{{title}}</div>
    <ul class="Am-Cell-wrp">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Cell-Group",
  props: {
    title: {
      type: String
    }
  }
};
</script>