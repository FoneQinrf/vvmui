<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-09 15:42:41
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

## Input 单行文本输入框
---

#### 使用方式

``` javascript

import Vue from 'vue'
import { Input } from 'am-ui'

Vue.component(Input)

```


#### 基础用法


```html

<Input />

```


#### 使用icon

通过使用`icon`属性显示左边icon

```html

<Input icon="iconaccount" />

```


#### 设置右边展示icon

通过使用`right-icon`属性显示右边icon

```html

<template>
  <Input @on-click="click" right-icon="iconinfo" />
</template>

<script>
export default {
  methods: {
    click() {
      this.$Toast.info("消息");
    }
  }
};
</script>

```


#### 展示单位

通过使用`unity`属性可设置单位

```html

<Input unity="元" />

```


#### 禁用

通过使用`disabled`属性可禁用输入框

```html

<Input disabled unity="元" />

```


#### 配合按钮使用

通过插槽配合按钮使用

```html

<Input>
  <template>
    <Button type="text">发送验证码</Button>
  </template>
</Input>

```


### API
##### Input props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| icon  | 左边icon图标     | String        | 无 | 无 |
| v-model  | 绑定值       | String/Number       | 无 | 无
| placeholder  | 占位文本      | String       | 无 | 请输入内容 |
| right-icon  | 右边icon      | String   | 无 | 无 |
| disabled  | 是否禁用输入框       | Boolean       | 无 | 无 |
| unity  |  单位属性，传入会展示在右边   | String       | 无 | 无 |
| maxlength  | 最大输入长度    | Number       | 无 | 无 |
| type  | input原生type属性    | String       | `text` `password` | text |
| scroll-target  | 使用scroll的dom节点名称，`ios系统键盘关闭不重绘页面scroll的可使用`    | String  | 无 | 无 |

##### Input solt
| 名称 | 说明 |
|------|------------|
| 无  | 输入框右边的内容 |

##### Input Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-click  | 点击右边icon触发 |  无  |