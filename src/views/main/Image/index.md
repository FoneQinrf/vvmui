<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-09 10:27:56
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->

### Image 图片展示 <Badge text="v0.05"/>
---

#### 使用方式

```js

import Vue from 'vue'
import { Image } from 'vvmui'

Vue.component(Image.name, Image)

```


#### 基本用法
##### 代码示例

```html

<template>
    <div class="Lazyload-wrp">
      <v-Image
        v-for="item in fit"
        :key="item"
        style="width: 48%;height: 80px;margin-top: 8px;"
        src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2075903360,405209795&fm=26&gp=0.jpg"
        :fit="item"
      />
    </div>
</template>

<script>
export default {
  data() {
    return {
      fit: ["fill", "contain", "cover", "none", "scale-down"]
    };
  }
};
</script>

<style lang="less" scoped>
.Lazyload-wrp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
}
.vvm-Image {
  background: #fff;
}
</style>

```


#### 懒加载
##### 代码示例

```html

<template>
    <div class="Lazyload-wrp">
      <v-Image
        v-for="item in list"
        :key="item"
        style="width: 48%;height: 80px;margin-top: 8px;"
        :src="item"
        lazy
        :delay-time="2000"
      >
        <Icon slot="placeholder" class="vvm-loading" icon="iconloading1" />
      </v-Image>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2075903360,405209795&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1141016847,1401366425&fm=26&gp=0.jpg",
        "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1290722415,3385672457&fm=26&gp=0.jpg",
        "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1548119743,252552301&fm=26&gp=0.jpg"
      ]
    };
  }
};
</script>

<style lang="less" scoped>
.Lazyload-wrp {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 15px;
}
.vvm-Image {
  background: #fff;
}
</style>

```


#### 图片加载失败
##### 代码示例
```html

<template>
    <v-Image style="width: 48%;height: 80px">
        <span slot="error">图片加载失败</span>
    </v-Image>
</template>

<style lang="less" scoped>
.vvm-Image {
  background: #fff;
}
</style>

```
### API
##### Image props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| src  | 图片地址，同img的src      | String        | 无 | 无 |
| fit | 确定图片如何适应容器框，同原生<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit" target="_blank">object-fit</a>       | String       | `fill` `contain` `cover` `none` `scale-down` | 无 |
| alt  | 同img标签alt      | String       | 无 | 无 |
| lazy  | 是否开启懒加载      | boolean       | 无 | 无 |
| delay-time  | 图片加载完毕时延迟多长时间展示图片      | Number       | 无 | 无 |

##### Image solt
| 名称 | 说明 |
|------|------------|
| placeholder | 图片未加载的占位内容 |
| error | 加载失败的内容 |

##### Image Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| on-load  | 图片加载成功触发 |  (Event)=>{}  |
| on-error | 图片加载失败触发 |  (Event)=>{}  |

##### 更新日志
| 版本 |类型|内容|
|:-------------:|:-|:-|