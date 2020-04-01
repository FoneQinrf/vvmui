<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 09:35:58
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-01 10:44:50
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
## Backtop 返回顶部
---

#### 使用方式
::: demo
``` javascript

import Vue from 'vue';
import { Backtop } from 'am-ui';

Vue.component(Backtop);

```
:::

#### 基本用法
`visibility-height`默认值为100，滑动超过100就会在右下角出现
::: demo
``` html

<Backtop target=".demo-body.gray">
    <i class="Am-iconfont icon15"></i>
</Backtop>

```
:::

#### 自定义显示内容

::: demo
``` html

<Backtop :bottom="44" :visibility-height="200" target=".demo-body.gray">
    <p>top</p>
</Backtop>

```
:::

### API
##### Backtop props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| right  | 元素距离右边的距离      | Number        | 无 | 10 |
| bottom  | 元素距底部距离       | Number       | 无 | 10 |
| target  | 触发滚动的对象名称      | String       | 无 | 不传默认获取boody |
| visibility-height  | 滚动高度达到此值才显示      | Number   | 无 | 100 |

#### Backtop solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义的主体内容 |

#### Backtop Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-click  | 点击时触发 |  无  |