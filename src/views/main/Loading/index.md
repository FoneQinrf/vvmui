<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 09:35:58
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-01 10:29:30
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->
## Loading 加载
---

#### 使用方式
::: demo
``` javascript

import Vue from 'vue';
import { Loading } from 'am-ui';

Vue.use(Loading);

```
:::

#### Loading用法

::: demo
``` javascript

Loading.spin.show();
setTimeout(() => {
    Loading.spin.hide();
}, 3000);

Loading.spin.show("加载中...");
setTimeout(() => {
    Loading.spin.hide();
}, 3000);

```
:::

#### LoadingBar用法

::: demo
``` javascript

Loading.loadingBar.start();
setTimeout(() => {
    Loading.loadingBar.finish();
}, 10000);

Loading.loadingBar.start();
setTimeout(() => {
    Loading.loadingBar.errer();
}, 10000);

```
:::

### API
| 方法 | 说明 | 参数 | 返回值 |
|------|------------|------------|------------|
| Loading.spin.show  | 展示Loading    | `options | message`        | 无 |
| Loading.spin.hide  | 关闭Loading       | `options | message`      | 无 |
| Loading.loadingBar.start  | 开始loadingBar      | `options | message`       | 无 | 
| Loading.loadingBar.finish  | 正常结束开始loadingBar     | `options | message`   | 无 |
| Loading.loadingBar.errer  | 错误结束loadingBar     | 无       | 无 |
| Loading.loadingBar.updata  | 更新进度    |  `percent` 0-100之间的代表进度数字      | 无 |
| Loading.loadingBar.destroyed  | 销毁loadingBar    |  无      | 无 |
| Loading.spin.destroyed  | 销毁spin    |  无     | 无 |

#### spin options
| 参数 | 说明 | 类型 | 默认值 |
|------|------------|------------|------------|
| context  | 提示内容     | String        | 无 |
| icon  | 自定义icon标签   | String        | iconzhuangtaijiazai |
| img  |  自定义展示的图片地址  | String        | 无 |