/*
 * @Author: Fone丶峰
 * @Date: 2020-04-01 11:07:37
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-16 17:50:22
 * @Description: 
 * @Email: qinrifeng@163.com
 */

import { mount } from 'vue-test-utils'
import DatetimePicker from '@/components/DatetimePicker'
import Vue from "vue";

describe('DatetimePicker.vue', () => {
    it('DatetimePicke不存在', () => {
        const wrapper = mount(DatetimePicker)
        expect(wrapper.exists()).toBe(true)
    })

    it('动态切换type，数据异常', async () => {
        const wrapper = mount(DatetimePicker)
        wrapper.setProps({ type: 'date' })
        expect(wrapper.vm.type).toBe('date')
        await Vue.nextTick()
        expect(wrapper.vm.options.length).toBe(3)
        const picker = wrapper.findAll('.Am-PickerColumn-wrp')
        expect(picker.length).toBe(3)

        wrapper.setProps({ type: 'time' })
        expect(wrapper.vm.type).toBe('time')
        await Vue.nextTick()
        expect(wrapper.vm.options.length).toBe(3)
        const time = wrapper.findAll('.Am-PickerColumn-wrp')
        expect(time.length).toBe(3)

        wrapper.setProps({ type: 'datetime' })
        expect(wrapper.vm.type).toBe('datetime')
        await Vue.nextTick()
        expect(wrapper.vm.options.length).toBe(6)
        const datetime = wrapper.findAll('.Am-PickerColumn-wrp')
        expect(datetime.length).toBe(6)
    })

    it('传入value，下标异常，数据异常', async () => {
        const wrapper = mount(DatetimePicker, {
            propsData: {
                value: '1969/12/12 23:23:23'
            }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.currentValue).toBe('1969/12/12 23:23:23')
        expect(wrapper.vm.timeItem).toEqual([1969, 12, 12, 23, 23, 23])
        expect(wrapper.vm.index).toEqual([0, 11, 11])
        const picker = wrapper.findAll({ name: 'Am-Picker' })
        expect(picker.at(0).vm.index).toBe(0)
        expect(picker.at(1).vm.index).toBe(11)
        expect(picker.at(2).vm.index).toBe(11)
    })

    it('异步type，异步v-model，数据异常', async (done) => {
        const wrapper = mount(DatetimePicker, {
            propsData: {
                value: '1969/12/12 23:23:23'
            }
        })
        await wrapper.vm.$nextTick()
        setTimeout(async () => {
            wrapper.setProps({ type: 'datetime', value: '1970/11/11 22:22:22' })
            await wrapper.vm.$nextTick()
            expect(wrapper.vm.currentValue).toBe('1970/11/11 22:22:22')
            expect(wrapper.vm.timeItem).toEqual([1970, 11, 11, 22, 22, 22])
            expect(wrapper.vm.index).toEqual([1, 10, 10, 22, 22, 22])
            const picker = wrapper.findAll({ name: 'Am-Picker' })
            expect(picker.at(0).vm.index).toBe(1)
            expect(picker.at(1).vm.index).toBe(10)
            expect(picker.at(2).vm.index).toBe(10)
            expect(picker.at(3).vm.index).toBe(22)
            expect(picker.at(4).vm.index).toBe(22)
            expect(picker.at(5).vm.index).toBe(22)
            done()
        }, 2000)
    })
})
