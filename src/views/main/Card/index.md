<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-14 10:04:34
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### Card 卡片
---

#### 使用方式

```js

import Vue from 'vue'
import { Card } from 'am-ui'

Vue.component(Card)

```


#### 基本用法
##### 代码示例

```html

<Card title-text="标题">
    <div :style="{height:'80px'}">自定义内容</div>
</Card>

```


#### 自定义右上角内容
通过`slot='title-right'`可自定义右上角内容
##### 代码示例

```html

<Card title-text="标题">
    <Icon slot="title-right" icon="icontime" />
    <div :style="{height:'80px'}">自定义内容</div>
</Card>

```


#### 隐藏头部内容
不需要头部内容时，可通过`is-title`属性隐藏头部内容
##### 代码示例
```html

<Card :is-title="false">
    <div :style="{height:'80px'}">自定义内容</div>
</Card>

```


#### 边框阴影
设置`shadow`属性会启用边框阴影样式
##### 代码示例
```html

<Card shadow title-text="标题">
    <div :style="{height:'80px'}">自定义内容</div>
</Card>

```
### API
##### Card props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| title-text  | 标题的内容      | String        | 无 | 标题 |
| is-title  | 是否渲染标题栏       | Boolean       | 无 | true |
| shadow  | 是否需要边框阴影样式      | Boolean       | 无 | 无 |

##### Card solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义的主体内容 |
| title-left | 标题栏左边内容 |
| title-right | 标题栏右边内容 |