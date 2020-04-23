<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-17 13:32:02
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

<template>
  <Picker :options="options" label="name" children="component" key-value="name" v-model="value" />
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        {
          name: "浙江",
          component: [
            {
              name: "杭州",
              component: [
                {
                  value: "xihu",
                  name: "西湖"
                }
              ]
            },
            {
              name: "宁波",
              component: [
                {
                  name: "老庙"
                },
                {
                  name: "老街"
                }
              ]
            }
          ]
        },
        {
          name: "江苏",
          component: [
            {
              name: "南京",
              component: [
                {
                  name: "夫子庙"
                }
              ]
            },
            {
              name: "苏州",
              component: [
                {
                  name: "拙政园"
                },
                {
                  name: "狮子林"
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