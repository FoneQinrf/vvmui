<!--
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:12:38
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

## NumberInput 数字键盘
---

#### 使用方式
::: demo
``` javascript

import Vue from 'vue'
import { NumberInput } from 'am-ui'

Vue.component(NumberInput)

```
:::

#### 基础用法
输入框内容默认靠左展示，可通过`align`属性设置内容靠右显示，`center`居中显示，因为整个输入框都是通过模拟实现，随意通过样式修改可能会出现问题
::: demo
```html

<Number-Input align="right" />

```
:::

#### 显示单位

通过使用`unity`属性显示单位
::: demo
```html

<Number-Input unity="元" />

```
:::

#### 禁用

通过使用`disabled`可禁用
::: demo
```html

<Number-Input disabled />

```
:::

### API
##### NumberInput props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| align  | 输入框内容的展示方式    | String        | `left` `center` `right` | 无 |
| v-model  | 绑定值       | String/Number       | 无 | 无
| placeholder  | 占位文本      | String       | 无 | 请输入内容 |
| icon  | 左边icon      | String   | 无 | 无 |
| disabled  | 是否禁用输入框       | Boolean       | 无 | 无 |
| unity  |  单位属性，传入会展示在右边   | String       | 无 | 无 |
| maxlength  | 最大输入长度    | Number       | 无 | 20 |
| confirm-text  | 数字键盘确认按钮的文字    | String       | 无 | 确认 |d
| is-decimal  |  是否需要小数点 | Boolean  | 无 | true |
| negative-number  |  是否需要 - 按键 | Boolean  | 无 | true |

#### NumberInput Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-focus | 失去焦点触发 |  无  |
| on-close | 关闭键盘触发 |  无  |
| on-remove | 删除内容的时候触发 |  当前的值  |
| on-confirm | 点击确认的时候触发 |  当前的值  |