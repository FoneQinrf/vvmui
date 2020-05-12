<!--
 * @Author: Fone丶峰
 * @Date: 2020-04-27 10:32:09
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-12 17:33:06
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### Dialog 弹出框  <Badge text="v0.07"/>
---

#### 使用方式

``` javascript

import { Dialog } from 'vvmui';

```


#### Dialog提示
##### 代码示例
``` javascript

Dialog.alert("我是提示消息");

Dialog.alert({
    context: "我是提示消息",
    showTitle: false
});

```


#### 底部按钮处理
##### 代码示例
``` javascript

Dialog.alert({
    context: "我是提示消息",
    showCancelButton: true
});

```
#### 异步关闭
##### 代码示例
``` javascript

Dialog.alert({
    context: "我是提示消息",
    showCancelButton: true,
    onConfirm: done => {
        setTimeout(done, 2000);
    }
});

```
#### 自定义内容
##### 代码示例
``` javascript

Dialog.alert({
    showCancelButton: true,
    render: h => {
        return h(Input);
    }
});

```

#### 组件调用
##### 代码示例
``` html

<template>
  <Dialog v-model="show" context="提示内容" />
</template>

<script>
import { Dialog } from 'vvmui';
export default {
  data() {
    return {
      show: false
    };
  },
  components: { Dialog }
};
</script>

```

### API
| 方法 | 说明 | 参数 | 返回值 |
|------|------------|------------|------------|
| Dialog.alert  |   展示弹窗   | `options | message`        |  |
| Dialog.close  | 关闭弹窗       | 无      | 无 |
| Dialog.destroyed  | 销毁弹窗       | 无       | 无 |

##### options
| 参数 | 说明 | 类型 | 默认值 |
|------|------------|------------|------------|
| showTitle  | 是否展示头部内容     | Boolean        | true |
| context  | 提示内容     | String        | 无 |
| showCancelButton  | 是否展示取消按钮   | Boolean        | 无 |
| showConfirmButton  |  是否展示确认按钮  | Boolean        | true |
| cancelButtonText  |  取消按钮上的文字  | String        | 取消 |
| confirmButtonText  |  确认按钮上的文字  | String        | 确认 |
| isClickMask  |  是否可点击背景蒙层关闭  | Boolean        | true |
| onConfirm  |  点击确认按钮时的回调函数  | Function        | 无 |
| lockScroll  |  是否锁定背景滑动事件，锁定时蒙层里的内容也将无法滚动  | Boolean        | 无 |
| routerChangeClose  |  是否路由变化时关闭Dialog  | Boolean        | true |
| render  |  主体内容，使用后context无效 <a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank"> 学习render语法</a>  | Function        | 无 |
| button  |  自定义按钮内容 <a href="https://cn.vuejs.org/v2/guide/render-function.html" target="_blank"> 学习render语法</a>  | Function        | 无 |

##### Dialog props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model / value  | 是否显示Dialog      | Boolean       | 无 | 无
| showTitle  | 是否展示头部内容      | Boolean       | 无 | true |
| context  | 提示内容     | String   | 无 | 无 |
| showCancelButton  |   是否展示取消按钮     | Boolean       | 无 | 无 |
| showConfirmButton  |  是否展示确认按钮   | Boolean       | 无 | true |
| cancelButtonText  | 取消按钮上的文字    | String       | 无 | 取消 |
| confirmButtonText  | 确认按钮上的文字    | String       | 无 | 确认 |
| isClickMask  | 是否可点击背景蒙层关闭    | Boolean       | 无 | true |
| onConfirm  | 点击确认按钮时的回调函数    | Function       | 无 | 无 |
| lockScroll  | 是否锁定背景滑动事件，锁定时蒙层里的内容也将无法滚动    | Boolean       | 无 | 无 |
| routerChangeClose  | 是否路由变化时关闭Dialog    | Boolean       | 无 | true |

##### Dialog Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-cancel  | 点击背景蒙层或者取消按钮关闭时触发 |  无  |

##### Dialog solt
| 名称 | 说明 |
|------|------------|
| 无 | 主体内容 |
| button | 底部按钮内容 |

##### 更新日志
| 版本 |类型|内容|
|-------------|-|-|