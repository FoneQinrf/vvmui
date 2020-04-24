/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 18:27:37
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import demoBlock from './components/demo-block.vue'
import Badge from './components/Badge.vue'
import UI from "../lib/index"
import '#/lib/style.css'
import './assets/style/normalize.css'
Vue.config.productionTip = false
Vue.component('demo-block', demoBlock)
Vue.component('Badge', Badge)
Vue.use(UI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
