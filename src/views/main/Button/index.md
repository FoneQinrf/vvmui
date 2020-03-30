<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-21 18:04:47
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-30 14:32:38
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
### Button 按钮
---

#### 使用方式
::: demo
``` javascript

import Vue from 'vue'
import { Button } from 'am-ui'

Vue.component(Button)

```
:::

#### 基本用法
`Button`支持`default`、`success`、`warning`、`errer`、`text`五种类型，默认`default`
##### 代码示例
::: demo
```html

<Button>主要按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="errer">错误按钮</Button>
<Button type="text">字体按钮</Button>

```
:::

#### 空心按钮
通过`plain`属性可将按钮设置为空心的按钮，按钮看起来的会比较简洁
##### 代码示例
::: demo
```html

<Button plain>主要按钮</Button>
<Button plain type="success">成功按钮</Button>
<Button plain type="warning">警告按钮</Button>
<Button plain type="errer">错误按钮</Button>

```
:::

#### 圆角按钮
`Button`默认是方的按钮，通过`round`属性可将按钮设置为圆角
##### 代码示例
::: demo
```html

<Button plain round>主要按钮</Button>
<Button plain round type="success">成功按钮</Button>
<Button plain round type="warning">警告按钮</Button>
<Button plain round type="errer">错误按钮</Button>

<Button round>主要按钮</Button>
<Button round type="success">成功按钮</Button>
<Button round type="warning">警告按钮</Button>
<Button round type="errer">错误按钮</Button>

```
:::

#### 按钮大小
设置`long`属性`Button`的宽度会为100%
##### 代码示例
::: demo
```html

<Button long>按钮</Button>

```
:::

#### 页面导航

##### 代码示例
可以通过`url`属性进行 URL 跳转，或通过`to`属性进行路由跳转，跳转默认都是使用push的方式跳转，设置`replace`属性会使用replace的方式跳转。
::: demo
```html

<Button to="/mobile/Input">路由跳转</Button>
<Button url="index.html">URL跳转</Button>

<Button to="/mobile/Input" replace>路由跳转</Button>
<Button url="index.html" replace>URL跳转</Button>

```
:::

#### 配合Icon使用

##### 代码示例
通过插槽可配合`Icon`使用
::: demo
```html

<Button>
    <Icon icon="iconbianji" style="padding-right:5px" />按 钮
</Button>
<Button>
    按 钮
    <Icon icon="iconcamera" />
</Button>

```
:::

#### 按钮loading

##### 代码示例
可通过设置`loading`属性开启按钮loading状态，`loading-text`属性可以设置loading状态时展示的内容
::: demo
```html

<Button loading></Button>
<Button loading type="success">主要按钮</Button>

```
:::

#### 禁用

##### 代码示例
通过`disabled`属性可禁用按钮
::: demo
```html

<Button disabled>主要按钮</Button>
<Button disabled type="success">主要按钮</Button>

```
:::

### API
##### Button props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| type  | `Button`的类型      | String        | `default` `errer` `success` `warning` `text` | default |
| disabled  | 是否禁用       | Boolean       | 无 | false
| round  | 是否为圆角按钮      | Boolean       | 无 | false |
| plain  | 是否为空心按钮      | Boolean   | 无 | false |
| loading  | 是否显示为加载状态       | Boolean       | 无 | false |
| long  | `Button`的宽度是否为100%     | Boolean       | 无 | false |
| loading-text  | 加载状态中显示的内容    | String       | 无 | 加载中... |to
| url  | 点击后跳转的地址    | String       | 无 | 无 |
| to  | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to)   | String       | 无 | 无 |
| replace  | 是否使用replace来跳转    | Boolean       | 无 | false |

#### Button solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义的主体内容 |

#### Button Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| click  | 点击按钮时触发 |  无  |

#### Button 方法
| 方法名 | 说明 | 参数 | 返回值 |
|------|------------|------------|------------|
| showLoading  | 开启loading状态 |  无  | 无 |
| removeLoading  | 关闭loading状态 |  无  | 无 |