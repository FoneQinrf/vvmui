<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 13:23:50
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 15:47:11
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### DatetimePicker 时间选择
---

#### 使用方式

``` javascript

import Vue from 'vue'
import { DatetimePicker } from 'vvmui'

Vue.component(DatetimePicker)

```


#### 基本用法
`type`预设date，可选date、datetime、time三种模式
##### 代码示例

```html

<DatetimePicker />
<DatetimePicker type="datetime" />
<DatetimePicker type="time" />

```


#### v-model使用
##### 代码示例

```html

<template>
    <DatetimePicker v-model="value" />
</template>

<script>
export default {
  data() {
    return {
      value: "2020/4/2"
    };
  }
};
</script>

```


#### 禁用
通过`disabled`属性可禁用`DatetimePicker`
##### 代码示例

```html

<DatetimePicker disabled />

```


#### 事件
##### 代码示例

```html

<template>
    <DatetimePicker @on-confirm="confirm" type="time" />
</template>

<script>
export default {
  methods: {
    confirm(val) {
      this.$Toast.info(val);
    }
  }
};
</script>

```


#### 自定义时间格式化
`formatter`属性可自定义格式化的函数
##### 代码示例

```html

<template>
    <DatetimePicker :formatter="formatter" />
</template>

<script>
export default {
  methods: {
    formatter(val) {
      return val.replace(/\//g, "-");
    }
  },
};
</script>

```

### API
##### DatetimePicker props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| placeholder  | 占位内容      | String        | 无 | 请选择 |
| disabled  | 是否禁用       | Boolean       | 无 | 无  |
| cancel-text  | 取消文本      | String       | 无 | 取消 |
| confirm-text  | 确认文本      | String   | 无 | 确认 |
| min-year  | 时间最小年份       | Number       | 无 | 1969 |
| max-year  | 时间最大年份     | Number       | 无 | 2025 |
| v-model  | 绑定的值    | String     | 无 | 无 |
| type  | 时间的类型    | String     | `date` `datetime` `time` | date |
| height  | Picker每一项的高度    | Number     | 无 | 38 |
| formatter  | 格式换函数   | Function     | 无 | 无 |

##### DatetimePicker Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-cancel | 点击取消关闭时间选择器时触发 |  无  |
| on-change  | 滑动选择时间时触发 |  当前选中的时间  |
| on-show  | 弹出时间选择框时触发 |  无  |
| on-confirm | 点击确认时触发 |  当前选中的时间  |

##### 更新日志
| 版本 |类型|内容|
|:-------------:|:-|:-|