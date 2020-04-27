/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-27 09:57:31
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

import Vue from "vue";
import Toast from "./index.vue";

function newInstall(options) {
    return new Vue({
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
}
let timer;
class Install {
    static getInstance(options, type) {
        const params = {
            value: undefined,
            context: undefined,
            type: undefined,
            duration: 3000,
            icon: undefined,
            mask: undefined,
            clear: () => { }
        }
        if (!Install.instance) {
            Install.instance = newInstall(params)
            if (window) {
                document.body.appendChild(Install.instance.$mount().$el)
            }
        }
        Object.assign(Install.instance, params, options, { value: true, context: options.context || options, type: options.type || type })
        if (Install.instance.duration > 0) {
            clearTimeout(timer);
            timer = setTimeout(function () {
                Object.assign(Install.instance, { value: false })
                Install.instance.clear()
            }, Install.instance.duration);
        }
    }

    static close() {
        if (Install.instance) {
            Object.assign(Install.instance, { value: false })
            Install.instance.clear()
            if (timer) {
                clearTimeout(timer);
            }
        }
    }
}


function init(options, type) {
    Install.getInstance(options, type)
}

const type = ["success", "errer", "warning", "loading"]
const fnc = {
    name: 'Toast',
    info: (options = {}) => {
        init(options)
    },
    close: () => {
        Install.close()
    }
}
type.forEach(element => {
    fnc[element] = (options = {}) => {
        init(options, element)
    }
});

if (process.env.NODE_ENV === 'test') {
    fnc.Install = Install
}

export default fnc
