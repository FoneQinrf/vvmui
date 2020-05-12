/*
 * @Author: Fone丶峰
 * @Date: 2020-05-07 15:53:38
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-12 17:31:14
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Vue from 'vue';
import vvmDialog from "./index.vue";
const { version } = require('#/package.json')

class Install {
    static init(options = {}) {
        if (!window) {
            return
        }

        const data = {
            show: false,
            showTitle: true,
            showConfirmButton: true,
            showCancelButton: false,
            titleText: '消息',
            context: undefined,
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            onCancel: () => { },
            onConfirm: undefined,
            render: undefined,
            isClickMask: true,
            button: undefined,
            lockScroll: undefined,
            routerChangeClose: undefined
        }

        if (!Install.instance) {
            Install.instance = Install.newInstall(Object.assign(data, options))
            document.body.appendChild(Install.instance.$mount().$el)
        }
        Object.assign(Install.instance, data, options, { show: true, context: typeof options === 'string' ? options : options.context })

        if (process.env.NODE_ENV === 'test') {
            vvmDialog.instance = Install.instance
        }
    }

    static newInstall(options) {
        return new Vue({
            data() {
                return options
            },
            render(h) {
                const render = this.render ? this.render(h) : this.context
                const button = this.button ? this.button(h) : this.isButton
                return h(vvmDialog, {
                    props: {
                        value: this.show,
                        showTitle: this.showTitle,
                        titleText: this.titleText,
                        context: this.context,
                        showCancelButton: this.showCancelButton,
                        showConfirmButton: this.showConfirmButton,
                        cancelButtonText: this.cancelButtonText,
                        confirmButtonText: this.confirmButtonText,
                        isClickMask: this.isClickMask,
                        onConfirm: this.onConfirm,
                        lockScroll: this.lockScroll,
                        routerChangeClose: this.routerChangeClose
                    },
                    scopedSlots: {
                        button: () => {
                            return button
                        },
                        default: () => {
                            return render
                        }
                    },
                    on: {
                        'on-cancel': this.cancel,
                        input: this.onShow
                    }
                }
                )
            },
            methods: {
                cancel() {
                    this.onCancel();
                },
                close() {
                    this.show = false;
                },
                destroyed() {
                    this.$destroy()
                },
                onShow(val) {
                    this.show = val
                }
            },
        })
    }
}

vvmDialog.alert = function (options) {
    Install.init(options)
}

vvmDialog.close = function () {
    Install.instance.$mount().close()
}

vvmDialog.destroyed = function () {
    Install.instance.$mount().destroyed()
    document.body.removeChild(Install.instance.$mount().$el)
    Install.instance = null
}

vvmDialog.version = version;

if (process.env.NODE_ENV === 'test') {
    vvmDialog.instance = Install.instance
}

export default vvmDialog;