/*
 * @Author: Fone丶峰
 * @Date: 2020-04-08 13:33:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 18:02:59
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Vue from "vue";
import Layer from "../../Layer";
import Icon from "../../Icon";

let install;

export default {
    init: (options = {}) => {
        if (!install) {
            install = new Vue({
                data() {
                    return {
                        show: false,
                        isMask: true,
                        onClose: () => { },
                        data: [],
                        closeText: "",
                        onMask: () => { },
                        label: "",
                        onConfirm: () => { }
                    }
                },
                render() {
                    return (
                        <Layer isMask={this.isMask} direction="bottom" onInput={this.mask} value={this.show}>
                            <div class="Am-Action-Sheet-Model">
                                {this.data.length > 0 ? <div class="Am-Action-Sheet-Model-list">
                                    {this.data.map((item) => {
                                        return <button onClick={() => this.click(item)} class={this.clasess(item.disabled)}>{item[this.label]}</button>
                                    })}
                                </div> :
                                    <div class="Am-Action-Sheet-loading">
                                        <Icon icon="iconloading1" size={24} class="Am-loading" />
                                    </div>
                                }
                                <button onClick={this.closeFn} class="Am-Action-Sheet-close">{this.closeText}</button>
                            </div>
                        </Layer>
                    );
                },
                methods: {
                    mask() {
                        this.show = false
                        this.onMask()
                    },
                    closeFn() {
                        this.show = false
                        this.onClose()
                    },
                    click(item) {
                        if (item.disabled) {
                            return
                        }
                        this.show = false
                        this.onConfirm(item)
                    },
                    clasess(disabled) {
                        return disabled ? 'Am-Action-Sheet-item disabled' : 'Am-Action-Sheet-item'
                    }
                }
            })
            if (window) {
                document.body.appendChild(install.$mount().$el)
            }
        }
        Object.assign(install, { show: true }, options)
    },
    updata: (options) => {
        Object.assign(install, options)
    }
}