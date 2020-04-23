/*
 * @Author: Fone丶峰
 * @Date: 2020-04-01 11:07:37
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-16 17:52:05
 * @Description: 
 * @Email: qinrifeng@163.com
 */

import { mount } from 'vue-test-utils'
import Checkbox from '@/components/Checkbox'
import CheckboxGroup from '@/components/CheckboxGroup'
import Vue from "vue";

describe('Checkbox.vue', () => {
    it('Checkbox存在', () => {
        const wrapper = mount(CheckboxGroup, {
            slots: {
                default: [Checkbox]
            }
        })
        expect(wrapper.exists()).toBe(true)
        expect(wrapper.find({ name: 'Checkbox' }).exists()).toBe(true)
    })
    it('选中正常', async () => {
        const wrapper = mount(CheckboxGroup, {
            propsData: {
                value: ['选项一']
            },
            slots: {
                default: [Checkbox, Checkbox]
            }
        })
        await Vue.nextTick()
        const find = wrapper.findAll({ name: 'Checkbox' })
        find.at(0).setProps({ label: '选项一' })
        find.at(1).setProps({ label: '选项二' })
        expect(find.at(0).vm.label).toBe('选项一')
        expect(find.at(1).vm.label).toBe('选项二')
        expect(find.at(0).vm.currentValue).toBe(true)
    })
    it('单个Checkbox禁用正常', async () => {
        const wrapper = mount(CheckboxGroup, {
            slots: {
                default: [Checkbox, Checkbox]
            }
        })
        await Vue.nextTick()
        const find = wrapper.findAll({ name: 'Checkbox' })
        find.at(0).setProps({ disabled: true })
        expect(find.at(0).vm.parenDisabled).toBe(true)
        expect(find.at(1).vm.parenDisabled).toBe(false)
    })
    it('CheckboxGroup禁用正常', async () => {
        const wrapper = mount(CheckboxGroup, {
            propsData: {
                disabled: true
            },
            slots: {
                default: [Checkbox, Checkbox]
            }
        })
        await Vue.nextTick()
        const find = wrapper.findAll({ name: 'Checkbox' })
        find.at(0).setProps({ disabled: false })
        expect(find.at(0).vm.parenDisabled).toBe(true)
        expect(find.at(1).vm.parenDisabled).toBe(true)
    })
    it('CheckboxGroup设置type正常', async () => {
        const wrapper = mount(CheckboxGroup, {
            propsData: {
                type: 'success'
            },
            slots: {
                default: [Checkbox, Checkbox]
            }
        })
        await Vue.nextTick()
        const find = wrapper.findAll({ name: 'Checkbox' })
        find.at(0).setProps({ type: 'errer' })
        expect(find.at(0).vm.parentType).toBe('success')
        expect(find.at(1).vm.parentType).toBe('success')
    })
    it('CheckboxGroup设置icon正常', async () => {
        const wrapper = mount(CheckboxGroup, {
            propsData: {
                icon: 'success'
            },
            slots: {
                default: [Checkbox, Checkbox]
            }
        })
        await Vue.nextTick()
        const find = wrapper.findAll({ name: 'Checkbox' })
        find.at(0).setProps({ icon: 'errer' })
        expect(find.at(0).vm.parentIcon).toBe('success')
        expect(find.at(1).vm.parentIcon).toBe('success')
    })
})
