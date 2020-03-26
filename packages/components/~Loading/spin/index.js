/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-09-25 13:43:06
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-09-29 14:44:23
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */
import Vue from "vue";
import spin from "./index.vue";

let install;

function newInstall(options) {
    install = new Vue({
        data() {
            return options;
        },
        render(h) {
            return h(spin, {
                props: {
                    icon: this.icon,
                    img: this.img,
                    context: this.context,
                    show: this.show
                }
            })
        }
    })
    if (window) {
        document.body.appendChild(install.$mount().$el)
    }
}

export default {
    show(options = {}) {
        const params = {
            icon: undefined,
            img: undefined,
            show: undefined,
            context: undefined
        }
        if (typeof options === 'string') {
            params.context = options
        } else {
            Object.assign(params, options)
        }
        if (!install) {
            newInstall(params)
        }
        Object.assign(install, params, { show: true })
    },
    hide() {
        Object.assign(install, { show: false })
    },
    destroyed() {
        document.body.removeChild(install.$mount().$el)
        install.$destroyed()
    }
}