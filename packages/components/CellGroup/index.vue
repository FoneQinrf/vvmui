<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:27
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 09:59:20
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <div class="vvm-CellGroup">
    <div v-if="title" class="vvm-CellGroup-title">{{title}}</div>
    <ul class="vvm-Cell-wrp">
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