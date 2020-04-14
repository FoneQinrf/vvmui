<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 13:23:50
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-09 15:41:32
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### ActionSheet 上拉菜单
---

#### 使用方式

``` javascript

import Vue from 'vue'
import { ActionSheet } from 'am-ui'

Vue.component(ActionSheet)

```


#### 基本用法
通过`data`设置菜单
##### 代码示例

```html

<Action-Sheet :data="[{label:'选项一',value:1},{label:'选项二',value:2}]" />

```


#### v-model使用
##### 代码示例

```html

<Action-Sheet v-model="value" :data="[{label:'男',value:1},{label:'女',value:2}]" />

```


#### 禁用
通过`disabled`属性可禁用`ActionSheet`
##### 代码示例

```html

<Action-Sheet disabled :value="1" :data="[{label:'男',value:1},{label:'女',value:2}]" />

```


#### 禁用部分选项
通过在`data`数据中增加disabled可禁用当前选项
##### 代码示例

```html

<template>
    <Action-Sheet :data="list"/>
</template>

<script>
export default {
  data(){
    return{
      list: [
        { label: "选项一", value: 1 },
        { label: "选项二", value: 2, disabled: true },
        { label: "选项三", value: 2 }
      ]
    }
  }
};
</script>

```


#### 异步数据
##### 代码示例

```javascript

<template>
    <Action-Sheet @on-show="show" :data="data" />
</template>

<script>
export default {
  data() {
    return {
      data: []
    };
  },
  methods: {
    show() {
      setTimeout(() => {
        this.data = [
          { label: "男", value: 1 },
          { label: "女", value: 2 }
        ];
      }, 2000);
    }
  }
};
</script>
```


#### 事件
##### 代码示例

``` Javascript

<template>
    <Action-Sheet @on-confirm="confirm" :data="list"/>
</template>

<script>
export default {
  data(){
    return{
      list: [
        { label: "选项一", value: 1 },
        { label: "选项二", value: 2, disabled: true },
        { label: "选项三", value: 2 }
      ]
    }
  },
  methods: {
    confirm(value) {
      this.$Toast.info(`选中value:${value}`);
    }
  }
};
</script>
```


### API
##### ActionSheet props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| placeholder  | 占位内容      | String        | 无 | 请选择 |
| disabled  | 是否禁用       | Boolean       | 无 | 无  |
| close-text  | 上拉选择内容的取消内容      | String       | 无 | 取消 |
| label  | data数据中在上拉菜单需要展示的字段      | String   | 无 | label |
| return-key  | 选中菜单时需要返回的字段       | String       | 无 | value |
| data  | 上拉菜展示的内容     | Array       | 无 | 无 |
| v-model  | 绑定的值    | String \  Boolean \ Number      | 无 | 无 |

##### ActionSheet Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-close  | 点击取消关闭上拉选择框时触发 |  无  |
| on-mask  | 点击上拉选择框背景蒙层时触发 |  无  |
| on-show  | 上拉选择框弹出时触发 |  无  |
| on-confirm | 点击上拉选择框选项时触发 |  选中的值和选中的整个对象  |