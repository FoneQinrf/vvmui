/*
 * @Author: Fone丶峰
 * @Date: 2020-04-01 11:07:37
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-24 10:04:20
 * @Description: 
 * @Email: qinrifeng@163.com
 */

import { mount } from 'vue-test-utils'
import Switch from '@/components/Switch'
import Vue from "vue";

describe('Switch.vue', () => {
    it('Switch存在', () => {
        const wrapper = mount(Switch)
        expect(wrapper.exists()).toBe(true)
    })
    it('type传入success，处理正常', () => {
        const wrapper = mount(Switch, {
            propsData: {
                type: 'success'
            }
        })
        expect(wrapper.props().type).toBe('success')
        expect(wrapper.classes()).toContain('success')
    })
    it('触发事件正常', async () => {
        const wrapper = mount(Switch);
        wrapper.vm.$emit('on-change');
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted('on-change')).toBeTruthy();
    })
    it('传入disabled，禁用正常', async () => {
        const wrapper = mount(Switch, {
            propsData: {
                disabled: true,
                value: true
            }
        })
        await Vue.nextTick()
        expect(wrapper.props().disabled).toBe(true)
        expect(wrapper.html()).toContain('<div class="vvm-Switch-disabled"></div>')
        const target = wrapper.find('.vvm-Switch')
        target.trigger('click')
        expect(wrapper.vm.currentValue).toBe(true)
    })
    it('传入activeValue=1,inactiveValue=0点击返回的值正常', async () => {
        const wrapper = mount(Switch, {
            propsData: {
                activeValue: 1,
                inactiveValue: 0
            }
        })
        const target = wrapper.find('.vvm-Switch')
        target.trigger('click')
        await Vue.nextTick()
        expect(wrapper.vm.currentValue).toBe(1)
        target.trigger('click')
        expect(wrapper.vm.currentValue).toBe(0)
    })
    it('v-model传入空值，数据正常', async () => {
        const wrapper = mount(Switch, {
            propsData: {
                value: ""
            }
        })
        await wrapper.vm.$nextTick();
        expect(wrapper.vm.active).toBe('')
    })
})