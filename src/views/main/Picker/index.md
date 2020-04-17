<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 13:23:50
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-17 13:42:20
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### Picker 时间选择
---

#### 使用方式

``` javascript

import Vue from 'vue'
import { Picker } from 'am-ui'

Vue.component(Picker)

```


#### 基本用法
##### 代码示例

```html

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

```


#### 联动用法
##### 代码示例

```html

<template>
  <Picker :options="options" />
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

```


#### 数据绑定
##### 代码示例

```html

<template>
  <Picker :options="options" v-model="model" />
</template>

<script>
export default {
  data() {
    return {
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
      model: ["jiangsu", "nanjing", "fuzimiao"]
    };
  }
};
</script>

```


#### 禁用
通过`disabled`可禁用`Picker`
##### 代码示例

```html

<Picker disabled :options="options" v-model="model" />

```


#### 异步级联数据
当`options`为空数组时，`Picker`会呈现加载状态
##### 代码示例

```html

<template>
  <Picker @on-show="show" :options="options" />
</template>

<script>
export default {
  data() {
    return {
      options: []
    };
  },
  methods: {
    show() {
      const that = this;
      const t = setTimeout(function() {
        clearTimeout(t);
        that.options = [
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
        ];
      }, 2000);
    }
  }
};
</script>

```
### 自定义数据解析方式
`label`用于展示的字段、`children`子集数据字段、`key-value`选中时返回的字段
#### 代码示例
```html

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

```

### API
##### Picker props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| placeholder  | 占位内容      | String        | 无 | 请选择 |
| disabled  | 是否禁用       | Boolean       | 无 | 无  |
| cancel-text  | 取消文本      | String       | 无 | 取消 |
| confirm-text  | 确认文本      | String   | 无 | 确认 |
| key-value  | 选中数据返回的字段       | String       | 无 | value |
| label  | 展示的字段     | String       | 无 | label |
| v-model  | 绑定的值    | String     | 无 | 无 |
| height  | Picker每一项的高度    | Number     | 无 | 38 |
| children  | 读取`options`子集的字段   | String     | 无 | children |

##### Picker Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-cancel | 点击取消关闭时触发 |  无  |
| on-change  | 滑动选择时触发 |  当前选中值的集合和所有选中的下标集合  |
| on-show  | 弹出选择框时触发 |  无  |
| on-confirm | 点击确认时触发 |  当前选中值的集合  |