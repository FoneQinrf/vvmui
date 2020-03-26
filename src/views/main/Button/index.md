<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-21 18:04:47
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-09-03 11:26:45
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
### Button 按钮
---

#### 使用方式
::: demo
```js

import Vue from 'vue'
import { Button } from 'ui'

Vue.component(Button.name, Button)

```
:::

#### 基本用法
`Button`支持`default`、`success`、`warning`、`errer`四种类型，默认`default`
##### 代码示例
::: demo
```html

<G-Button>主要按钮</G-Button>
<G-Button type="success">成功按钮</G-Button>
<G-Button type="warning">警告按钮</G-Button>
<G-Button type="errer">错误按钮</G-Button>
<G-Button type="text">字体按钮</G-Button>

```
:::

#### 空心按钮
通过`plain`属性可将按钮设置为空心的按钮，按钮看起来的会比较简洁
##### 代码示例
::: demo
```html

<G-Button plain>主要按钮</G-Button>
<G-Button plain type="success">成功按钮</G-Button>
<G-Button plain type="warning">警告按钮</G-Button>
<G-Button plain type="errer">错误按钮</G-Button>

```
:::

#### 圆角按钮
`Button`默认是方的按钮，通过`round`属性可将按钮设置为圆角
##### 代码示例
::: demo
```html

<G-Button plain round>主要按钮</G-Button>
<G-Button plain round type="success">成功按钮</G-Button>
<G-Button plain round type="warning">警告按钮</G-Button>
<G-Button plain round type="errer">错误按钮</G-Button>

<G-Button round>主要按钮</G-Button>
<G-Button round type="success">成功按钮</G-Button>
<G-Button round type="warning">警告按钮</G-Button>
<G-Button round type="errer">错误按钮</G-Button>

```
:::

#### 按钮大小
`Button`预设`normal`、`small`、`mini`、`large`四种大小，可通过`size`属性设置，默认`normal`
##### 代码示例
::: demo
```html

<G-Button>normal</G-Button>
<G-Button size="small">small</G-Button>
<G-Button size="mini">mini</G-Button>
<G-Button size="large">large</G-Button>

```
:::