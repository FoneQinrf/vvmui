<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-21 18:04:47
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-22 16:24:59
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
### Cell 单元格
---

#### 使用方式
::: demo
```js

import Vue from 'vue'
import { Upload } from 'vant'

Vue.component(Upload.name, Upload)

```
:::

#### 基本用法
```Cell```可单独使用，也可配合```Cell-Group```使用，```Cell-Group```为```Cell```提供单元格分割线。
##### 代码示例
::: demo
```html

<G-Cell-Group title="基本用法">
    <G-Cell label="单元格" context="内容" />
    <G-Cell label="单元格" context="内容" />
</G-Cell-Group>

```
:::

#### 导航用法
传递`to`或者`url`字段可激活导航用法。
::: demo
```html

<G-Cell-Group title="导航用法">
    <G-Cell label="路由跳转" to="/mobile/Input" />
    <G-Cell label="页面跳转" url="index.html" />
</G-Cell-Group>

```
:::