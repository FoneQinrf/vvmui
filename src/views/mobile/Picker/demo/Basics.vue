<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 11:40:12
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <Picker :options="options" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        { label: "选项一" },
        { label: "选项二" },
        { label: "选项三" },
        { label: "选项四" },
        { label: "选项五" },
        { label: "选项六" },
        { label: "选项七" }
      ]
    };
  }
};
</script>