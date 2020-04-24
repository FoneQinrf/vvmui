<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 15:53:36
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
### Icon - 图标
---
#### 使用方式

``` javascript

import Vue from 'vue'
import { Icon } from 'vvmui'

Vue.component(Icon)

```
#### 所有Icon
<template>
  <div class="vvm-Icon">
    <div v-for="item in list" :key="item" class="icon" @click="copy" :data-clipboard-text="style(item)">
      <Icon :icon="item" :size="24"/>
      <div class="name">{{item}}</div>
    </div>
  </div>
</template>

<script>
import clipboard from 'clipboard';
export default {
  data(){
    return{
        list:['icongithub','iconxiangzuo','iconloading1','iconloading','iconfile','icon15','iconiconfontmove','iconradioactive','iconzhuangtaijiazai','iconzengjia1','iconshanchu','icondian','iconxiangxia','iconsearch','iconrejected','iconkey','iconaccount','iconlist-rigthl','iconselected','iconzhengque','icontime','iconcuowu','iconcamera','iconuncheck','iconinfo','iconicon-']
    }
  },
  methods:{
    copy(){
      alert('复制成功')
    }
  },
  mounted() {
        new clipboard(".icon");
    },
    computed: {
        style() {
            return function(str) {
                return `<Icon icon="${str}" />`;
            };
        }
    }
};
</script>

<style lang="less" scoped>
.vvm-Icon{
  display:flex;
  flex-wrap: wrap;
  .icon{
    padding: 20px;
    cursor: pointer;
  }
}
</style>

### API

#### Icon props
| 属性 |说明|类型|默认值|
|:-------------:|:-|:-|:-|
|icon|图标对应名称|String|无
|size|控制图标大小|Number|无
|color|图标颜色|String|无

##### 更新日志
| 版本 |类型|内容|
|:-------------:|:-|:-|