<!--
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 13:49:17
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 -->
### 快速上手
---
#### 安装
``` cmd

# 通过 npm 安装
npm i am-ui -S

# 通过 yarn 安装
yarn add am-ui

```
#### 使用方式
##### 引入样式
```javascript

//不管哪种引入方式都需要引入样式
import 'am-ui/style.css';

```
##### 按需引入
安装 babel-plugin-import 插件     
``` javascript

// npm i babel-plugin-import -D   或 yarn add babel-plugin-import 
// 在.babelrc中添加插件配置
{
  "plugins": [
    ["import", {
      "libraryName": "am-ui", 
      "libraryDirectory": "lib/components"
    }]
  ]
}

// 接着你可以在代码中直接引入am-ui组件
import { Button } from 'vant';

```
##### 手动按需引入
``` javascript

import Button from 'am-ui/lib/Button';

```
##### 一次性引入所有
``` javascript

import Vue from 'vue';
import Amui from 'am-ui';
import 'am-ui/style.css';

Vue.use(Amui);

```
#### 定制主题
##### 样式覆盖的方式
``` css

/*theme-variables.less*/

/*主题色*/
@theme-color:#7e60ff;

@errer-color:#F23363;
@success-color:#1FAF70;
@warning-color:#F9A62B;

import 'am-ui/style.less';

```
然后在项目入口引入以上文件
``` javascript

import Vue from 'vue'
import Amui from 'am-ui'
import './theme-variables.less'

Vue.use(Amui)

```