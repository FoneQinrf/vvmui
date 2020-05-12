<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-12 15:37:29
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### Model 模态窗 <Badge text="v0.07"/>
---

#### 使用方式

``` javascript

import Vue from 'vue'
import { Model } from 'vvmui'

Vue.component(Model)

```


#### 基础用法
##### 代码示例
```html

<Model v-model="top" isClickMask direction="top">
    <div class="model" style="height:200px;width:100%"></div>
</Model>
<Model v-model="bottom" isClickMask direction="bottom">
    <div class="model" style="height:200px;width:100%"></div>
</Model>
<Model v-model="left" isClickMask direction="left">
    <div class="model" style="height:100%;width:100px"></div>
</Model>
<Model v-model="right" isClickMask direction="right">
    <div class="model" style="height:100%;width:100px"></div>
</Model>
<Model v-model="center" isClickMask direction="center">
    <div class="model" style="height:100px;width:100px"></div>
</Model>

```

### API
##### Model props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 是否显示模态窗       | Boolean       | 无 | 无
| mask-show  | 是否需要背景蒙层      | Boolean       | 无 | 无 |
| isClickMask  | 是否可点击背景蒙层     | Boolean   | 无 | 无 |
| lockScroll  |   是否锁定背景滑动事件，锁定时蒙层里的内容也将无法滚动     | Boolean       | 无 | 无 |
| direction  |  模态窗出现的方式   | String       | `top` `left` `right` `bottom` `center` | center |
| routerChangeClose  | router变化时是否关闭模态窗    | Boolean       | 无 | true |

##### Model Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-mask  | 点击背景蒙层时触发 |  无  |

##### Model solt
| 名称 | 说明 |
|------|------------|
| 无 | 背景蒙层上的主体内容 |

##### 更新日志
| 版本 |类型|内容|
|-------------|-|-|