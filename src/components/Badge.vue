<!--
 * @Author: Fone丶峰
 * @Date: 2020-03-30 13:29:54
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-30 13:33:19
 * @Description: 
 * @Email: qinrifeng@163.com
 -->
<template>
  <span class="badge">{{text}}</span>
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>

<style lang="less" scoped>
.badge {
  background: #7e60ff;
  display: inline-block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  border-radius: 3px;
  padding: 0 6px;
  color: #fff;
  margin-right: 5px;
  vertical-align: top;
}
</style>