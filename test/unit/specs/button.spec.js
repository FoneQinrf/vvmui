/*
 * @Author: Fone丶峰
 * @Date: 2020-04-08 10:26:19
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-17 14:08:46
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

import { mount } from 'vue-test-utils'
import Button from '@/components/Button'
import Vue from "vue";

describe('Button.vue', () => {
    it('Button存在', () => {
        const wrapper = mount(Button)
        expect(wrapper.exists()).toBe(true)
    })
    it('type传入success，处理正常', () => {
        const wrapper = mount(Button, {
            propsData: {
                type: 'success'
            }
        })
        expect(wrapper.props().type).toBe('success')
        expect(wrapper.classes()).toContain('Am-Button-type-success')
    })
    it('传入disabled，禁用正常', async () => {
        const wrapper = mount(Button, {
            propsData: {
                disabled: true
            }
        })
        await Vue.nextTick()
        expect(wrapper.props().disabled).toBe(true)
        expect(wrapper.vm.tagDisabled).toBe(true)
        expect(wrapper.classes()).toContain('Am-Button-disabled')
    })
    it('传入loading，loading正常', async () => {
        const wrapper = mount(Button, {
            propsData: {
                loading: true
            }
        })
        await Vue.nextTick()
        expect(wrapper.props().loading).toBe(true)
        expect(wrapper.vm.currentLoading).toBe(true)
        expect(wrapper.vm.tagDisabled).toBe(true)
    })
    it('showLoading、removeLoading正常', async () => {
        const wrapper = mount(Button)
        await Vue.nextTick()
        wrapper.vm.showLoading()
        expect(wrapper.vm.currentLoading).toBe(true)
        wrapper.vm.removeLoading()
        expect(wrapper.vm.currentLoading).toBe(false)
    })
})