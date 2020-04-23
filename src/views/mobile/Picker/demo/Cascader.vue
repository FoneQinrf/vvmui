<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 11:40:20
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <Picker :options="options"  />
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "jiangsu",
          label: "浙江",
          children: [
            {
              value: "nanjing",
              label: "杭州",
              children: [
                {
                  value: "fuzimiao",
                  label: "西湖"
                }
              ]
            },
            {
              value: "suzhou",
              label: "宁波",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "老庙"
                },
                {
                  value: "shizilin",
                  label: "老街"
                }
              ]
            }
          ]
        },
        {
          value: "jiangsu",
          label: "江苏",
          children: [
            {
              value: "nanjing",
              label: "南京",
              children: [
                {
                  value: "fuzimiao",
                  label: "夫子庙"
                }
              ]
            },
            {
              value: "suzhou",
              label: "苏州",
              children: [
                {
                  value: "zhuozhengyuan",
                  label: "拙政园"
                },
                {
                  value: "shizilin",
                  label: "狮子林"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>