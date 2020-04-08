/*
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:01:36
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

import Vue from 'vue';
import keyboard from './keyboard';

let install;

function newInstall() {
    install = new Vue({
        data() {
            return {
                value: false,
                isDecimal: true,
                negativeNumber: true
            }
        },
        render(h) {
            return h(keyboard, {
                props: {
                    confirmText: this.confirmText,
                    value: this.value,
                    isDecimal: this.isDecimal,
                    negativeNumber: this.negativeNumber
                },
                on: {
                    'on-close': this.onClose,
                    'on-keyup': this.onKeyup,
                    'on-remove': this.onRemove,
                    'on-confirm': this.onConfirm
                }
            });
        },
        methods: {
            onClose(val) {
                this.value = val;
                if (!val) {
                    this.close()
                }
            },
            onKeyup(val) {
                this.keyup(val);
            },
            onRemove() {
                this.remove();
            },
            onConfirm() {
                this.confirm();
                this.value = false;
            }
        }
    });
    if (window) {
        document.body.appendChild(install.$mount().$el)
    }
}

export default {
    name: "G-Number-keyboard",
    show: (options = {}) => {
        if (!install) {
            newInstall();
        }
        Object.assign(install, { value: true }, options);
    },
    close: () => {
        if (install) {
            Object.assign(install, { value: false });
        }
    }
}