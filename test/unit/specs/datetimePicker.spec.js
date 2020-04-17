/*
 * @Author: Fone丶峰
 * @Date: 2020-04-01 11:07:37
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-17 14:45:25
 * @Description: 
 * @Email: qinrifeng@163.com
 */

import { mount } from 'vue-test-utils'
import DatetimePicker from '@/components/DatetimePicker'
import Vue from "vue";

describe('DatetimePicker.vue', () => {
    it('DatetimePicke存在', () => {
        const wrapper = mount(DatetimePicker)
        expect(wrapper.exists()).toBe(true)
    })

    it('动态切换type，数据正常', async () => {
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

    it('传入value，下标正常，数据正常', async () => {
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

    it('异步type，异步v-model，数据正常', async (done) => {
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

    it('模拟用户滑动选择，数据正常', async () => {
        const wrapper = mount(DatetimePicker, {
            propsData: {
                minYear: 2010,
                maxYear: 2020
            }
        })
        await wrapper.vm.$nextTick()
        const find = wrapper.findAll({ name: 'Am-Picker' })
        find.at(0).vm.$emit('on-change', [1, 3])
        find.at(1).vm.$emit('on-change', [2, 2])
        find.at(2).vm.$emit('on-change', [3, 23])
        expect(wrapper.vm.fncTime()).toBe('2013/03/24')

        wrapper.setProps({ type: 'time' })
        await wrapper.vm.$nextTick()
        const time = wrapper.findAll({ name: 'Am-Picker' })
        time.at(0).vm.$emit('on-change', [1, 21])
        time.at(1).vm.$emit('on-change', [2, 22])
        time.at(2).vm.$emit('on-change', [3, 0])
        expect(wrapper.vm.fncTime()).toBe('21:22:00')

        wrapper.setProps({ type: 'datetime' })
        await wrapper.vm.$nextTick()
        const datetime = wrapper.findAll({ name: 'Am-Picker' })
        datetime.at(0).vm.$emit('on-change', [1, 4])
        datetime.at(1).vm.$emit('on-change', [2, 3])
        datetime.at(2).vm.$emit('on-change', [3, 24])
        datetime.at(3).vm.$emit('on-change', [4, 22])
        datetime.at(4).vm.$emit('on-change', [5, 23])
        datetime.at(5).vm.$emit('on-change', [6, 11])
        expect(wrapper.vm.fncTime()).toBe('2014/04/25 22:23:11')
    })
})
