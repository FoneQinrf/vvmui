<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 14:32:29
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

## Calendar 日历选择
---

#### 使用方式

``` javascript

import Vue from 'vue'
import { Calendar } from 'vvmui'

Vue.component(Calendar)

```


#### 基础用法
##### 代码示例
```html

<Calendar />

```


#### 选择单个日期
`Calendar`默认选择时间区间，通过`type`属性预设`range`、`single`，默认`range`，通过设置`single`可选择单个时间。
##### 代码示例
```html

<Calendar type="single" />

```


#### 不禁用过去的日期
过去的时间段时默认禁用的，通过`oldDateDisabled`属性可设置不禁用过去时间段。
##### 代码示例
```html

<Calendar :oldDateDisabled="false" />

```


#### v-model绑定时间

##### 代码示例
```html

<template>
    <Calendar v-model="value" />
</template>

<script>
export default {
  data() {
    return {
      value: ["2020/5/3", "2020/5/6"]
    };
  }
};
</script>
```

#### 自定义禁用日期
禁用这个月的今天和下个月的今天，通过`disabled-list`传递数据可自定义禁用的日期。
##### 代码示例
```html

<template>
    <Calendar :oldDateDisabled="false" :disabled-list="disabledList" />
</template>

<script>
export default {
  data() {
    return {
      disabledList: []
    };
  },
  mounted() {
    const date = new Date();
    this.disabledList = [
      `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
      `${date.getFullYear()}/${date.getMonth() + 2}/${date.getDate()}`
    ];
  }
};
</script>

```
#### 自定义日期solt内容
通过内容分发，每个月的这一天上自定义个红点。
##### 代码示例
``` html

<template>
    <Calendar>
        <template slot="dateItem" slot-scope="{node}">
            <template v-if="node.day === date">
              <span>{{node.day}}</span>
              <i class="red"></i>
            </template>
        </template>
    </Calendar>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getDate()
    };
  }
};
</script>

<style lang="less" scoped>
.red {
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: red;
  position: absolute;
  top: 5px;
  right: 10px;
  z-index: 100000;
}
</style>

```
#### 禁用
##### 代码示例
```html

<Calendar disabled />

```

### API
##### Calendar props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 绑定值       | String/Array       | 无 | 无
| placeholder  | 占位文本      | String       | 无 | 请选择时间 |
| title-text  | 日期弹窗上的title内容      | String   | 无 | 请选择日期 |
| disabled  | 是否禁用      | Boolean       | 无 | 无 |
| location-date  |  v-model不传时会根据该字段计算时间段，该字段不传默认当前时间   | String       | 无 | 无 |
| disabled-list  | 禁用日期的数组    | Array       | 无 | 无 |
| oldDateDisabled  | 是否禁用过去的时间段    | Boolean       | 无 | true |
| type  | 日期选择的模式，`range`区间选择、`single`选择单个日期    | String  | `range` `single` | range |
| start-text  | 区间选择时日期选择框下部分开始时间的内容   | String  | 无 | 开始日 |
| end-text  | 区间选择时日期选择框下部分结束时间的内容   | String  | 无 | 结束日 |
| single-text  | 单个时间选择时日期选择框下部分时间的内容   | String  | 无 | 选中时间 |
| confirm-text  | 日期选择框下部分右下角确认的内容   | String  | 无 | 确认 |
| range-separator  | 区间选择，选中时间的分割符号   | String  | 无 | 至 |
| formatter  | 时间格式化函数   | Function，`(value) => {}`  | 无 | 无 |

##### Calendar solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义日期选择框下部分左边时间数据的内容 |
| dateItem | 自定义日期的内容，参数为{ node } |

##### Calendar Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-close  | 时间选择框关闭时触发 |  无  |
| on-confirm  | 时间选择完点击确认触发 |  选中的时间数据  |
| on-open | 时间选择框打开时触发 |  无  |
| on-change | 点击时间选中时触发 |  选中的时间数据和每个时间的组件内部数据，`(value,options) => {}`  |