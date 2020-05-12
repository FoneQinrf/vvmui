<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-02 10:04:13
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-12 15:39:55
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### Switch 开关
---

#### 按需引入使用方式

``` javascript

import Vue from 'vue'
import { Switch } from 'vvmui'

Vue.component(Switch.name, Switch)

```


#### 基础用法
`Switch`支持`default`、`success`、`warning`、`errer`四种类型，默认`default`

```html

<v-Switch />
<v-Switch type="success" />
<v-Switch type="warning" />
<v-Switch type="errer" />

```


#### 绑定值

```html
<template>
    <v-Switch v-model="value" />
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


#### 自定义返回值

通过`active-value`和`inactive-value`两个字段可以自定义选中和为选中的返回值

```html

<template>
    <v-Switch :active-value="1" :inactive-value="0" @on-change="change" />
</template>

<script>
export default {
  methods: {
    change(val) {
      this.$Toast.info(`变化的值：${val}`);
    }
  }
};
</script>

```


#### 禁用


```html

<template>
    <div>
        <v-Switch disabled />
        <v-Switch disabled v-model="value" />
    </div>
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


### API
##### Switch props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| type  | `Switch`的类型      | String        | `default` `errer` `success` `warning` | default |
| v-model  | 绑定值       | String/Number/Boolean       | 无 | 无
| active-value  |   `Switch` 打开时的值    | String/Number/Boolean       | 无 | 无 |
| inactive-value | `Switch` 关闭时的值       | String/Number/Boolean   | 无 | 无 |
| disabled  | 是否禁用`Switch`      | Boolean       | 无 | 无 |

##### Switch Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-change  | 状态发生变化时的回调函数 |  新状态的值  |

##### 更新日志
| 版本 |类型|内容|
|:-------------:|:-|:-|