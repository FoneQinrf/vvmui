/*
 * @Author: Fone丶峰
 * @Date: 2020-05-12 11:08:06
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-12 11:32:48
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from 'vue-test-utils'
import Model from '@/components/Model'

describe('Model', () => {
    it('direction', async () => {
        const wrapper = mount(Model, {
            propsData: {
                value: true,
                direction: 'left'
            }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.currentValue).toBe(true)
        expect(wrapper.find('.vvm-Model-body.left').exists()).toBe(true)
    })

    it('mask-show', async () => {
        const wrapper = mount(Model, {
            propsData: {
                value: true,
                direction: 'left',
                maskShow: false
            }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.find('.vvm-Model-mask').exists()).toBe(false)
    })

    it('isClickMask', async () => {
        const wrapper = mount(Model, {
            propsData: {
                value: true,
                direction: 'left',
                isClickMask: true
            }
        })
        await wrapper.vm.$nextTick()
        wrapper.vm.click()
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.currentValue).toBe(false)
    })
})