<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-14 11:04:56
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### Cell 单元格
---

#### 使用方式

```js

import Vue from 'vue'
import { Cell, CellGroup } from 'vvmui'

Vue.component(Cell)
Vue.component(CellGroup)

```


#### 基本用法
```Cell```可单独使用，也可配合```Cell-Group```使用，```Cell-Group```为```Cell```提供单元格分割线。
##### 代码示例

```html

<Cell-Group title="基本用法">
    <Cell label="单元格" context="内容" />
    <Cell label="单元格" context="内容" />
</Cell-Group>

```


#### 显示icon
传入`icon`可显示左边icon
##### 代码示例

```html

<Cell-Group title="展示icon">
    <Cell icon="iconaccount" label="内容一" context="内容" />
    <Cell icon="iconrejected" label="内容二" context="内容" />
</Cell-Group>

```


#### block模式
默认的都是行内块方式，通过`model`定义block属性可使用非行内块的模式。
##### 代码示例
```html

<Cell-Group title="block模式">
    <Cell model="block" label="内容一" context="内容" />
    <Cell model="block" label="内容二" context="内容" />
</Cell-Group>

```


#### 导航用法
可以通过`url`属性进行 URL 跳转，或通过`to`属性进行路由跳转，跳转默认都是使用push的方式跳转，设置`replace`属性会使用replace的方式跳转。
##### 代码示例
```html

<Cell-Group title="导航用法">
    <Cell label="路由跳转" to="/mobile/Input" />
    <Cell label="页面跳转" url="index.html" />
</Cell-Group>

```


#### 插槽自定义内容
##### 代码示例
```html

<Cell-Group title="插槽自定义内容">
    <Cell model="block">
    <template slot="label">自定义label</template>
    <template>自定义内容</template>
    </Cell>
</Cell-Group>

```


### API
##### Cell props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| label  | 左边label内容      | String        | 无 | 无 |
| context  | 主体内容       | String       | 无 | 无 |
| icon  | 左边icon，传入会显示      | String       | 无 | 无 |
| arrow  | 右边箭头是否显示      | Boolean   | 无 | false |
| model  | `Cell`组件的布局方式       | String       | `default` `block` | default |
| url  | 点击后跳转的地址    | String       | 无 | 无 |
| to  | 点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to)   | String       | 无 | 无 |
| replace  | 是否使用replace来跳转    | Boolean       | 无 | false |
| reture-value | 点击时`on-click`事件需要返回的数据   | 无       | 无 | 无 |

##### Cell-Group props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| title  | 标题文字      | String        | 无 | 无 |

##### Cell solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义的主体内容 |
| label | 左边label的自定义内容 |

##### Cell Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-click  | 点击`Cell`时触发 |  无  |