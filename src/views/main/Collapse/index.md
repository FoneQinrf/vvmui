<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-07 10:25:29
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### Collapse 单元格
---

#### 使用方式

```js

import Vue from 'vue'
import { Collapse, CollapseGroup } from 'vvmui'

Vue.component(Collapse)
Vue.component(CollapseGroup)

```


#### 基本用法
##### 代码示例

```html

<Collapse-Group>
    <Collapse name="1" title="标题一">默认可展开多个</Collapse>
    <Collapse name="2" title="标题二">默认可展开多个</Collapse>
</Collapse-Group>

```


#### 手风琴
设置`accordion`属性可使用手风琴效果
##### 代码示例

```html

<Collapse-Group accordion>
    <Collapse name="1" title="标题一">accordion开启手风琴模式</Collapse>
    <Collapse name="2" title="标题二">accordion开启手风琴模式</Collapse>
    <Collapse name="3" title="标题三">accordion开启手风琴模式</Collapse>
</Collapse-Group>

```


#### 自定义标题
##### 代码示例
```html

<Collapse-Group accordion>
    <Collapse name="1">
        <template slot="title">
            <span style="padding-right:8px">标题一</span>
            <Icon icon="iconinfo" />
        </template>
        <template>自定义标题的内容将覆盖title字段的内容</template>
    </Collapse>
    <Collapse name="2" title="标题二">自定义标题的内容将覆盖title字段的内容</Collapse>
</Collapse-Group>

```

### API
##### Collapse props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| title  | 标题内容      | String        | 无 | 无 |
| name  | 唯一标识       | String / Number       | 无 | 无 |

##### Collapse-Group props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 当前激活的面板(如果是手风琴模式，绑定值类型需要为`string`，否则为`array`)      | String / Array        | 无 | 无 |
| accordion  | 是否手风琴模式       | Boolean      | 无 | 无 |

##### Collapse solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义的主体内容 |
| title | 自定义标题内容，会覆盖`title`字段 |

##### Collapse-Group Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-change  | 当前激活面板改变时触发 |  (array / string) => {}  |

##### 更新日志
| 版本 |类型|内容|
|:-------------:|:-|:-|