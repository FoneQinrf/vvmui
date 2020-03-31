<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 09:35:58
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-31 17:19:01
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
## Toast 消息提示
---

#### 使用方式
::: demo
``` javascript

import Vue from 'vue';
import { Toast } from 'am-ui';

Vue.use(Toast);

```
:::

#### Toast用法

::: demo
``` javascript

Toast.info("提示消息");
Toast.success("成功");
Toast.warning("警告");
Toast.errer("错误");

```
:::

#### 自定义用法

::: demo
``` javascript

Toast.success({
    icon: "iconsuccessful",
    context: "成功"
});

Toast.success({
    mask: true,
    context: "成功",
    duration: 5000
});

Toast.success({
    duration: 5000,
    context: "成功"
});

```
:::

### API
| 方法 | 说明 | 参数 | 返回值 |
|------|------------|------------|------------|
| Toast.info  | 展示文本提示     | `options | message`        | 无 |
| Toast.success  | 展示成功提示       | `options | message`      | 
| Toast.warning  | 展示警告提示      | `options | message`       | 无 | 
| Toast.errer  | 展示错误提示      | `options | message`   | 无 |
| Toast.close  | 关闭Toast     | 无       | 无 |

#### options
| 参数 | 说明 | 类型 | 默认值 |
|------|------------|------------|------------|
| context  | 提示内容     | String        | 无 |
| type  | 提示类型，可选值`success` `errer` `warning`   | String        | 无 |
| icon  | 自定义icon标签   | String        | 无 |
| duration  |  Toast延迟关闭事件，单位毫秒  | Number        | 3000 |
| clear  |  Toast关闭后触发的回调  | Function        | 无 |