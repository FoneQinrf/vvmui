/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-13 16:38:03
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */


import Vue from 'vue'
import App from './App.vue'
import router from './router/mobile'
import UI from "../lib/index"
import demoTop from "./components/demo-top/index.vue";
import './assets/style/normalize.css'
Vue.component("demoTop", demoTop);
require("#/lib/style.css");
Vue.config.productionTip = false
Vue.use(UI)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
