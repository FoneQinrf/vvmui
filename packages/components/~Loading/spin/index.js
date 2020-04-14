/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 09:56:11
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
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