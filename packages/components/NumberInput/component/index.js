/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-12-18 11:52:11
 * @LastEditors  : Fone丶峰
 * @LastEditTime : 2019-12-18 13:35:25
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
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
        Object.assign(install, { value: false });
    }
}