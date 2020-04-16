/*
 * @Author: Fone丶峰
 * @Date: 2020-04-14 13:24:55
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-16 17:52:34
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from 'vue-test-utils'
import NumberInput from '@/components/NumberInput'
import Vue from "vue";

describe('NumberInput.vue', () => {
    it('NumberInput不存在', () => {
        const wrapper = mount(NumberInput)
        expect(wrapper.exists()).toBe(true)
    })
    it('传入value，视图异常', async () => {
        const wrapper = mount(NumberInput, {
            propsData: {
                value: 123456
            }
        })
        await Vue.nextTick()
        expect(wrapper.vm.currentValue).toBe('123456')
    })
    it('禁用状态异常', async () => {
        const wrapper = mount(NumberInput, {
            propsData: {
                disabled: true
            }
        })
        await Vue.nextTick()
        wrapper.find('.Am-Number-Input-input').trigger('click')
        expect(wrapper.vm.show).toBe(false)
    })
    it('键盘点击，值异常', async () => {
        const wrapper = mount(NumberInput)
        await Vue.nextTick()
        const keyboard = wrapper.find({ name: 'G-Number-keyboard' })
        keyboard.vm.keyup(1)
        keyboard.vm.keyup(2)
        keyboard.vm.keyup(3)
        expect(wrapper.vm.currentValue).toBe('123')
    })
    it('长度过长，点击处理异常', async () => {
        const wrapper = mount(NumberInput, {
            propsData: {
                maxlength: 4,
                value: 1234
            }
        })
        await Vue.nextTick()
        const keyboard = wrapper.find({ name: 'G-Number-keyboard' })
        keyboard.vm.keyup(1)
        keyboard.vm.keyup(2)
        keyboard.vm.keyup(3)
        expect(wrapper.vm.currentValue).toBe('1234')
        expect(wrapper.vm.value).toBe(1234)
    })
    it('删除内容异常', async () => {
        const wrapper = mount(NumberInput, {
            propsData: {
                value: 1234
            }
        })
        await Vue.nextTick()
        const keyboard = wrapper.find({ name: 'G-Number-keyboard' })
        keyboard.vm.remove()
        expect(wrapper.vm.currentValue).toBe('123')
    })
    it('点击键盘和删除交叉行为，数据异常', async () => {
        const wrapper = mount(NumberInput, {
            propsData: {
                value: 1
            }
        })
        await Vue.nextTick()
        const keyboard = wrapper.find({ name: 'G-Number-keyboard' })
        keyboard.vm.keyup(1)
        keyboard.vm.keyup(2)
        keyboard.vm.remove()
        keyboard.vm.keyup(3)
        expect(wrapper.vm.currentValue).toBe('113')
    })
})