<!--
 * @Author: Fone丶峰
 * @Date: 2020-01-02 15:44:14
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-12 15:40:08
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### Checkbox 多选
---

#### 使用方式

``` javascript

import Vue from 'vue'
import { Checkbox, CheckboxGroup } from 'vvmui'

Vue.component(Checkbox)
Vue.component(CheckboxGroup)

```


#### 基础用法

```html

<Checkbox>选项</Checkbox>

```


#### type类型
`type`类型提供`default`、`errer`、`success`、`warning`四种可选，默认`default`

```html

<Checkbox-Group>
    <Checkbox type="default" label="default"></Checkbox>
    <Checkbox type="errer" label="errer"></Checkbox>
    <Checkbox type="success" label="success"></Checkbox>
    <Checkbox type="warning" label="warning"></Checkbox>
</Checkbox-Group>

```


#### 配合CheckboxGroup使用


```html

<Checkbox-Group>
    <Checkbox label="选项一" />
    <Checkbox label="选项二" />
    <Checkbox label="选项三" />
</Checkbox-Group>

```


#### v-model绑定


```html

<template>
    <Checkbox-Group v-model="model">
        <Checkbox label="选项一" />
        <Checkbox label="选项二" />
        <Checkbox label="选项三" />
    </Checkbox-Group>
</template>

<script>
export default {
  data() {
    return {
      model: ["选项二"]
    };
  }
};
</script>

```


#### 禁用

可通过`disabled`属性禁用`Checkbox`组件

```html

<Checkbox-Group :value="['选项二']">
    <Checkbox disabled label="选项一" />
    <Checkbox disabled label="选项二" />
    <Checkbox label="选项三" />
</Checkbox-Group>

```


#### CheckboxGroup的type属性

也可通过`CheckboxGroup`组件的`type`控制所有`Checkbox`组件的`type`，`disabled`属性和`icon`属性也可这样操作

```html

<Checkbox-Group type="success" :value="['选项二']">
    <Checkbox label="选项一" />
    <Checkbox label="选项二" />
    <Checkbox label="选项三" />
</Checkbox-Group>

```


#### change事件


```html

<template>
    <Checkbox-Group @on-change="change">
        <Checkbox label="选项一" />
        <Checkbox label="选项二" />
        <Checkbox label="选项三" />
    </Checkbox-Group>
</template>

<script>
export default {
  methods: {
    change(val) {
      this.$Toast.info(`选中：${val}`);
    }
  }
};
</script>

```


### API
##### Checkbox props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 绑定值       | Boolean       | 无 | 无
| type  | 不同的类型对应不同的主题色彩      | String       | `default` `errer` `success` `warning` | default |
| label  | 选中状态的值      | String/Number/Boolean    | 无 | 无 |
| disabled  | 是否禁用       | Boolean       | 无 | 无 |
| icon  | 自定义Checkbox选中的icon    | String       | 无 | iconselected |

### API
##### CheckboxGroup props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 绑定值       | Array      | 无 | 无
| type  |    设置该属性可控制Checkbox的type属性   | String       | `default` `errer` `success` `warning` | 无 |
| inline  | 是否开启行内块      | Boolean    | 无 | true |
| disabled  | 设置该属性可控制Checkbox的disabled属性       | Boolean       | 无 | 无 |
| icon  | 设置该属性可控制Checkbox的icon属性    | String       | 无 | 无 |

##### Checkbox solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义主体内容 |

##### Checkbox Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-change | Checkbox变化时触发，嵌套CheckboxGroup组件使用时无效 |  选中的label值  |

##### CheckboxGroup Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-change | 绑定值变化时触发 |  选中的label值数组  |

##### 更新日志
| 版本 |类型|内容|
|:-------------:|:-|:-|