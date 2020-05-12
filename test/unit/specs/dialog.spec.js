/*
 * @Author: Fone丶峰
 * @Date: 2020-05-07 15:55:40
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-12 16:37:20
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Dialog from '@/components/Dialog'
import Vue from "vue";
import { findComponentsDownward } from "../utils";
import { mount } from 'vue-test-utils'

describe('Dialog', () => {
    it('context', async () => {
        Dialog.alert('提示消息')
        await Vue.nextTick()
        const Install = findComponentsDownward(Dialog.instance.$mount(), 'Dialog')
        expect(Install.show).toBe(true);
        expect(Install.context).toBe('提示消息');
        expect(document.querySelector('.vvm-Dialog-button-wrp.cancel')).toBeNull();
    })

    it('hidden title', async () => {
        Dialog.alert({ context: '提示消息', showTitle: false })
        await Vue.nextTick()
        const dialog = findComponentsDownward(Dialog.instance.$mount(), 'Dialog')
        expect(dialog.showTitle).toBe(false);
    })

    it('button', async () => {
        Dialog.alert({ context: '提示消息', showCancelButton: true })
        await Vue.nextTick()
        const dialog = findComponentsDownward(Dialog.instance.$mount(), 'Dialog')
        expect(dialog.showCancelButton).toBe(true);
        expect(document.querySelector('.vvm-Dialog-button-wrp.cancel') !== null).toBe(true)
    })

    it('hidden button', async () => {
        Dialog.alert({ context: '提示消息', showCancelButton: false, showConfirmButton: false })
        await Vue.nextTick()
        const dialog = findComponentsDownward(Dialog.instance.$mount(), 'Dialog')
        expect(dialog.showCancelButton).toBe(false);
        expect(dialog.showConfirmButton).toBe(false);
        expect(document.querySelector('.vvm-Dialog-button')).toBeNull();
    })

    it('async close loading', async (done) => {
        Dialog.alert({
            context: '提示消息',
            onConfirm: async (cb) => {
                await Vue.nextTick()
                const dialog = findComponentsDownward(Dialog.instance.$mount(), 'Dialog')
                expect(dialog.loading).toBe(true)
                cb()
                await Vue.nextTick()
                expect(dialog.loading).toBe(false)
                done()
            }
        })
        await Vue.nextTick()
        const dialog = findComponentsDownward(Dialog.instance.$mount(), 'Dialog')
        dialog.confirm()
    })

    it('solt default', async () => {
        Dialog.alert({
            context: '提示消息',
            render: (h) => {
                return h('div', { class: { 'dialog-default': true } })
            }
        })
        await Vue.nextTick()
        expect(document.querySelector('.dialog-default') !== null).toBe(true)
    })

    it('solt button', async () => {
        Dialog.alert({
            context: '提示消息',
            button: (h) => {
                return h('div', { class: { 'dialog-button': true } })
            }
        })
        await Vue.nextTick()
        expect(document.querySelector('.dialog-button') !== null).toBe(true)
    })

    it('close', async () => {
        Dialog.alert({
            context: '提示消息'
        })
        await Vue.nextTick()
        const dialog = findComponentsDownward(Dialog.instance.$mount(), 'Dialog')
        expect(dialog.show).toBe(true)
        Dialog.close()
        await Vue.nextTick()
        expect(dialog.show).toBe(false)
    })

    it('components showTitle', async () => {
        const wrapper = mount(Dialog, {
            propsData: {
                value: true,
                showTitle: false
            }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.find('.vvm-Dialog-title').exists()).toBe(false)
    })

    it('components confirm loading', async (done) => {
        const wrapper = mount(Dialog, {
            propsData: {
                value: true,
                onConfirm: async (cb) => {
                    wrapper.vm.cancel()
                    expect(wrapper.vm.loading).toBe(true)
                    cb()
                    await wrapper.vm.$nextTick()
                    expect(wrapper.vm.loading).toBe(false)
                    expect(wrapper.vm.show).toBe(false)
                    done()
                }
            }
        })
        await wrapper.vm.$nextTick()
        wrapper.vm.confirm()
    })

    it('components confirm', async () => {
        const wrapper = mount(Dialog, {
            propsData: {
                value: true
            }
        })
        await wrapper.vm.$nextTick()
        wrapper.vm.confirm()
        expect(wrapper.vm.show).toBe(false)
    })

    it('components cancel', async () => {
        const wrapper = mount(Dialog, {
            propsData: {
                value: true
            }
        })
        await wrapper.vm.$nextTick()
        wrapper.vm.cancel()
        expect(wrapper.vm.show).toBe(false)
    })
})