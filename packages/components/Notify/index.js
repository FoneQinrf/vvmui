/*
 * @Author: Fone丶峰
 * @Date: 2020-04-27 10:25:39
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-27 16:01:15
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Vue from "vue";
import { backColorClass } from "@/utils/index.js";
import Icon from "@/components/Icon";

function create(options) {
    const install = new Vue({
        data() {
            return Object.assign({
                type: "",
                context: "",
                duration: 3000,
                icon: '',
                clear: () => { }
            }, options, { show: false, timers: "" })
        },
        /* eslint-disable */
        render(h) {
            return (
                <transition onAfterLeave={this.onAfterLeave} name="top">
                    <div v-show={this.show} class={this.clasess}>
                        {
                            this.icon ? <Icon icon={this.icon} /> : ''
                        }
                        {this.context}
                    </div>
                </transition>
            )
        },
        /* eslint-disable */
        computed: {
            clasess() {
                return ['vvm-Notify', backColorClass[this.type]]
            }
        },
        methods: {
            timer() {
                this.timers = setTimeout(() => {
                    clearTimeout(this.timers)
                    this.show = false
                }, this.duration || 3000)
            },
            onAfterLeave() {
                this.$destroy();
                document.body.removeChild(this.$el)
                this.clear();
            },
            close() {
                this.show = false
                clearTimeout(this.timers)
            }
        }
    })
    if (window) {
        document.body.appendChild(install.$mount().$el)
    }
    Object.assign(install, { show: true })
    install.timer()
    return install.$mount()
}

const Notify = {}

const array = ['info', 'success', 'errer', 'warning']

array.forEach(element => {
    Notify[element] = (options = {}) => {
        return create(Object.assign(options, { type: element, context: options.context || options }))
    }
});

export default Notify;