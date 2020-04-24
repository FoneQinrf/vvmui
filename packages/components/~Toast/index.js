/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 10:00:29
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

import Vue from "vue";
import Toast from "./index.vue";

let install;

function newInstall(options) {
    install = new Vue({
        data() {
            return options;
        },
        render(h) {
            return h(Toast, {
                props: {
                    value: this.value,
                    context: this.context,
                    type: this.type,
                    icon: this.icon,
                    mask: this.mask
                }
            })
        }
    })
    if (window) {
        document.body.appendChild(install.$mount().$el)
    }
}

let timer;

function init(options, type) {
    const params = {
        value: undefined,
        context: undefined,
        type: undefined,
        duration: 3000,
        icon: undefined,
        mask: undefined,
        clear: () => { }
    }
    if (!install) {
        newInstall(params)
    }
    Object.assign(install, params, options, { value: true, context: options.context ? options.context : options, type: type })
    if (install.duration > 0) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            Object.assign(install, { value: false })
            install.clear()
        }, install.duration);
    }
}

const type = ["success", "errer", "warning", "loading"]
const fnc = {
    name: 'Toast',
    info: (options = {}) => {
        init(options)
    },
    close: () => {
        if (install) {
            Object.assign(install, { value: false })
            install.clear()
        }
    }
}
type.forEach(element => {
    fnc[element] = (options = {}) => {
        init(options, element)
    }
});

export default fnc
