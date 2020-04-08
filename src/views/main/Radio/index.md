<!--
 * @Author: Fone丶峰
 * @Date: 2019-11-05 10:53:12
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:12:52
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

## Radio 单选
---

#### 使用方式
::: demo
``` javascript

import Vue from 'vue'
import { Radio, RadioGroup } from 'am-ui'

Vue.component(Radio)
Vue.component(RadioGroup)

```
:::

#### 基础用法
::: demo
```html

<Radio>单选框</Radio>

```
:::

#### type类型
`type`类型提供`default`、`errer`、`success`、`warning`四种可选，默认`default`
::: demo
```html

<Radio-Group inline>
    <Radio type="errer" label="errer" />
    <Radio type="success" label="success" />
    <Radio type="warning" label="warning" />
</Radio-Group>

```
:::

#### 配合RadioGroup使用

`RadioGroup`组件通过`inline`可把`Radio`设置为行内块元素
::: demo
```html

<Radio-Group inline>
    <Radio label="单选框1" />
    <Radio label="单选框2" />
    <Radio label="单选框3" />
</Radio-Group>

```
:::

#### 自定义图标

`Radio`组件通过`icon`属性也可自定义选中图标
::: demo
```html

<Radio-Group inline>
    <Radio icon="iconselected" label="单选框1" />
    <Radio icon="iconselected" label="单选框2" />
    <Radio icon="iconselected" label="单选框3" />
</Radio-Group>

```
:::

#### 配合icon使用

通过插槽可自定义一些显示内容
::: demo
```html

<Radio-Group inline>
    <Radio label="单选框1">
        <Icon icon="iconaccount" />
        单选框1
    </Radio>
    <Radio label="单选框2">
        <Icon icon="iconcamera" />
        单选框2
    </Radio>
</Radio-Group>

```
:::

#### 禁用

通过`disabled`属性可禁用
::: demo
```html

<template>
    <Radio disabled>单选框</Radio>
    <Radio v-model="value" disabled>单选框</Radio>
</template>

<script>
export default {
  data() {
    return {
      value: true
    };
  }
};
</script>

```
:::

#### 使用RadioGroup禁用

也可通过`RadioGroup`组件的`disabled`控制所有`Radio`组件的禁用状态，`type`属性和`icon`属性也可这样操作
::: demo
```html

<template>
    <Radio-Group v-model="label" disabled inline>
        <Radio label="单选框1" />
        <Radio label="单选框2" />
        <Radio label="单选框3" />
    </Radio-Group>
</template>

<script>
export default {
  data() {
    return {
      label: "单选框1"
    };
  }
};
</script>

```
:::

### API
##### Radio props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 绑定值       | String/Number/Boolean       | 无 | 无
| type  | 不同的类型对应不同的主题色彩      | String       | `default` `errer` `success` `warning` | default |
| label  | Radio 的 value      | String/Number/Boolean    | 无 | 无 |
| disabled  | 是否禁用       | Boolean       | 无 | 无 |
| icon  | 自定义Radio选中的icon    | String       | 无 | iconradioactive |

### API
##### RadioGroup props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 绑定值       | String/Number/Boolean       | 无 | 无
| type  |    设置该属性可控制Radio的type属性   | String       | `default` `errer` `success` `warning` | 无 |
| inline  | 是否开启行内块      | Boolean    | 无 | 无 |
| disabled  | 设置该属性可控制Radio的disabled属性       | Boolean       | 无 | 无 |
| icon  | 设置该属性可控制Radio的icon属性    | String       | 无 | 无 |

#### Radio solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义主体内容 |

#### Radio Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-change | Radio变化时触发，嵌套RadioGroup组件使用时无效 |  选中的label值  |

#### RadioGroup Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-change | 绑定值变化时触发 |  选中的label值  |