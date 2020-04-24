<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 14:18:58
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

## Toast 消息提示
---

#### 使用方式

``` javascript

import Vue from 'vue';
import { Toast } from 'vvmui';

Vue.use(Toast);

```


#### Toast用法


``` javascript

Toast.info("提示消息");
Toast.success("成功");
Toast.warning("警告");
Toast.errer("错误");

```


#### 自定义用法


``` javascript

this.$Toast.success({
    icon: "iconuncheck",
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

##### 更新日志
| 版本 |类型|内容|
|:-------------:|:-|:-|