/*
 * @Author: Fone丶峰
 * @Date: 2020-04-01 11:07:37
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 16:49:15
 * @Description: 
 * @Email: qinrifeng@163.com
 */

import { mount } from 'vue-test-utils'
import Picker from '@/components/Picker'
import { modal } from "~/views/mobile/From/components/date.js";
const options = modal()

describe('Picker.vue', () => {
    it('Picker存在', () => {
        const wrapper = mount(Picker)
        expect(wrapper.exists()).toBe(true)
    })

    it('传入级联数据，渲染正常，数据正常', async () => {
        const wrapper = mount(Picker, {
            propsData: {
                options: options
            }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.list.length).toBe(3)
        expect(wrapper.vm.index).toEqual([0, 0, 0])
        expect(wrapper.findAll({ name: 'v-Picker' }).length).toBe(3)
    })

    it('异步options数据，loading正常，数据正常', async (done) => {
        const wrapper = mount(Picker)
        await wrapper.vm.$nextTick()
        expect(wrapper.find('.vvm-Picker-loading').exists()).toBe(true)
        setTimeout(async () => {
            wrapper.setProps({ options: options })
            await wrapper.vm.$nextTick()
            expect(wrapper.find('.vvm-Picker-loading').exists()).toBe(false)
            expect(wrapper.vm.list.length).toBe(3)
            expect(wrapper.vm.index).toEqual([0, 0, 0])
            const find = wrapper.findAll({ name: 'v-Picker' })
            expect(find.length).toBe(3)
            expect(find.at(0).vm.index).toBe(0)
            expect(find.at(1).vm.index).toBe(0)
            expect(find.at(2).vm.index).toBe(0)
            done()
        }, 2000)
    })

    it('传入v-model，数据正常', async () => {
        const wrapper = mount(Picker, {
            propsData: {
                options: options,
                value: ['广东省', '广州市', '东山区'],
                keyValue: 'name',
                label: "name"
            }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.list.length).toBe(3)
        expect(wrapper.vm.index).toEqual([2, 0, 2])
        const find = wrapper.findAll({ name: 'v-Picker' })
        expect(find.length).toBe(3)
        expect(find.at(0).vm.index).toBe(2)
        expect(find.at(1).vm.index).toBe(0)
        expect(find.at(2).vm.index).toBe(2)
    })

    it('异步的v-model，数据正常', async (done) => {
        const wrapper = mount(Picker, {
            propsData: {
                options: options,
                keyValue: 'name',
                label: "name"
            }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.index).toEqual([0, 0, 0])
        setTimeout(async () => {
            wrapper.setProps({ value: ['广东省', '广州市', '东山区'] })
            await wrapper.vm.$nextTick()
            expect(wrapper.vm.list.length).toBe(3)
            expect(wrapper.vm.index).toEqual([2, 0, 2])
            const find = wrapper.findAll({ name: 'v-Picker' })
            expect(find.length).toBe(3)
            expect(find.at(0).vm.index).toBe(2)
            expect(find.at(1).vm.index).toBe(0)
            expect(find.at(2).vm.index).toBe(2)
            done()
        }, 2000)
    })

    it('异步的v-model和级联数据，先v-model后级联数据，数据正常', async (done) => {
        const wrapper = mount(Picker, {
            propsData: {
                keyValue: 'name',
                label: "name"
            }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.index).toEqual([])
        setTimeout(async () => {
            wrapper.setProps({ value: ['广东省', '广州市', '东山区'] })
            await wrapper.vm.$nextTick()
            expect(wrapper.vm.index).toEqual([])
            setTimeout(async () => {
                wrapper.setProps({ options: options })
                await wrapper.vm.$nextTick()
                expect(wrapper.vm.list.length).toBe(3)
                expect(wrapper.vm.index).toEqual([2, 0, 2])
                const find = wrapper.findAll({ name: 'v-Picker' })
                expect(find.length).toBe(3)
                expect(find.at(0).vm.index).toBe(2)
                expect(find.at(1).vm.index).toBe(0)
                expect(find.at(2).vm.index).toBe(2)
                done()
            }, 2000)
        }, 2000)
    })

    it('异步的v-model和级联数据，先级联数据后v-model，数据正常', async (done) => {
        const wrapper = mount(Picker, {
            propsData: {
                keyValue: 'name',
                label: "name"
            }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.index).toEqual([])
        setTimeout(async () => {
            wrapper.setProps({ options: options })
            await wrapper.vm.$nextTick()
            expect(wrapper.vm.index).toEqual([0, 0, 0])
            setTimeout(async () => {
                wrapper.setProps({ value: ['广东省', '广州市', '东山区'] })
                await wrapper.vm.$nextTick()
                expect(wrapper.vm.list.length).toBe(3)
                expect(wrapper.vm.index).toEqual([2, 0, 2])
                const find = wrapper.findAll({ name: 'v-Picker' })
                expect(find.length).toBe(3)
                expect(find.at(0).vm.index).toBe(2)
                expect(find.at(1).vm.index).toBe(0)
                expect(find.at(2).vm.index).toBe(2)
                done()
            }, 2000)
        }, 2000)
    })

    it('异步的v-model和级联数据，数据正常', async (done) => {
        const wrapper = mount(Picker, {
            propsData: {
                keyValue: 'name',
                label: "name"
            }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.index).toEqual([])
        setTimeout(async () => {
            wrapper.setProps({ options: options, value: ['广东省', '广州市', '东山区'] })
            await wrapper.vm.$nextTick()
            expect(wrapper.vm.list.length).toBe(3)
            expect(wrapper.vm.index).toEqual([2, 0, 2])
            const find = wrapper.findAll({ name: 'v-Picker' })
            expect(find.length).toBe(3)
            expect(find.at(0).vm.index).toBe(2)
            expect(find.at(1).vm.index).toBe(0)
            expect(find.at(2).vm.index).toBe(2)
            done()
        }, 2000)
    })
})
