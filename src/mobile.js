/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 09:35:58
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-23 09:41:41
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router/mobile'
import UI from "@/../packages/index"
import demoTop from "@/components/demo-top";
import './assets/style/normalize.css'
Vue.component("demoTop", demoTop);
require("#/lib/style.css");
Vue.config.productionTip = false
Vue.use(UI)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
