/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 09:35:58
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-30 13:34:49
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import demoBlock from '@/components/demo-block.vue'
import Badge from '@/components/Badge.vue'
import './assets/style/normalize.css'
require("#/lib/style.css");
Vue.config.productionTip = false
Vue.component('demo-block', demoBlock)
Vue.component('Badge', Badge)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
