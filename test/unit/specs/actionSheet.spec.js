/*
 * @Author: Fone丶峰
 * @Date: 2020-04-01 11:07:37
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-16 17:51:01
 * @Description: 
 * @Email: qinrifeng@163.com
 */

import { mount } from 'vue-test-utils'
import ActionSheet from '@/components/ActionSheet'
import Vue from "vue";

describe('ActionSheet.vue', () => {
    it('ActionSheet不存在', () => {
        const wrapper = mount(ActionSheet)
        expect(wrapper.exists()).toBe(true)
    })

    it('value传入null处理异常', () => {
        const wrapper = mount(ActionSheet, {
            propsData: {
                value: null
            }
        })
        expect(wrapper.vm.placeholderText).toBe("")
    })

    it('value传入空字符串处理异常', () => {
        const wrapper = mount(ActionSheet, {
            propsData: {
                value: ""
            }
        })
        expect(wrapper.vm.placeholderText).toBe("")
    })

    it('value传入0处理异常', () => {
        const wrapper = mount(ActionSheet, {
            propsData: {
                value: 0
            }
        })
        expect(wrapper.vm.placeholderText).toBe("")
    })

    it('传入value、data数据异常', () => {
        const wrapper = mount(ActionSheet, {
            propsData: {
                value: 0,
                data: [{ label: '男', value: 0 }, { label: '女', value: 1 }]
            }
        })
        expect(wrapper.vm.currentValue).toBe(0)
        expect(wrapper.vm.placeholderText).toBe('男')
    })

    it('禁用异常', async () => {
        const wrapper = mount(ActionSheet, {
            propsData: {
                disabled: true
            }
        })
        await Vue.nextTick()
        expect(wrapper.props().disabled).toBe(true)
        wrapper.find('.Am-Action-Sheet-placeholder').trigger('click')
        expect(wrapper.vm.show).toBe(false)
    })
})