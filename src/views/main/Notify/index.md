<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-27 10:32:09
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-12 15:42:18
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### Notify 消息通知   <Badge text="v0.04"/>
---

#### 使用方式

``` javascript

import Vue from 'vue';
import { Notify } from 'vvmui';

```


#### Notify用法
##### 代码示例
``` javascript

Notify.info("提示消息");
Notify.success("成功");
Notify.warning("警告");
Notify.errer("错误");

```


#### 自定义用法
##### 代码示例
``` javascript

Notify.success({
    icon: "iconinfo",
    context: "成功"
});

Notify.success({
    duration: 5000,
    context: "成功"
});

```
#### 手动关闭
##### 代码示例
``` javascript

const el = this.$Notify.success("消息");
setTimeout(() => {
    el.close();
}, 2000);

```


### API
| 方法 | 说明 | 参数 | 返回值 |
|------|------------|------------|------------|
| Notify.info  | 展示文本提示     | `options | message`        | 组件实例 |
| Notify.success  | 展示成功提示       | `options | message`      | 组件实例 |
| Notify.warning  | 展示警告提示      | `options | message`       | 组件实例 |
| Notify.errer  | 展示错误提示      | `options | message`   | 组件实例 |

#### options
| 参数 | 说明 | 类型 | 默认值 |
|------|------------|------------|------------|
| context  | 提示内容     | String        | 无 |
| icon  | 自定义icon标签   | String        | 无 |
| duration  |  Notify延迟关闭事件，单位毫秒  | Number        | 3000 |
| clear  |  Notify关闭后触发的回调  | Function        | 无 |

##### 更新日志
| 版本 |类型|内容|
|:-------------:|:-|:-|