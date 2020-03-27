<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-26 15:03:21
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-26 17:17:56
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
<template>
  <Picker :options="options" v-model="model" :model="type" />
</template>

<script>
export default {
  data() {
    return {
      type: [],
      options: [
        {
          value: "zhejiang",
          label: "浙江",
          children: [
            {
              value: "hangzhou",
              label: "杭州",
              children: [
                {
                  value: "xihu",
                  label: "西湖"
                }
              ]
            },
            {
              value: "ninbo",
              label: "宁波",
              children: [
                {
                  value: "laomiao",
                  label: "老庙"
                },
                {
                  value: "laojie",
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
      ],
      model: {
        city: "nanjing",
        province: "jiangsu",
        area: "fuzimiao"
      }
    };
  },
  mounted() {
    const that = this;
    const t = setTimeout(function() {
      clearTimeout(t);
      that.type = ["province", "city", "area"];
    }, 2000);
  }
};
</script>