/*
 * @Author: Fone丶峰
 * @Date: 2020-04-20 10:21:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-20 18:00:24
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from 'vue-test-utils'
import Calendar from '@/components/Calendar'
import { getDate } from "@/components/Calendar/components/utils.js";

const date = getDate(new Date)
describe('Calendar.vue', () => {
    it('Calendar存在', () => {
        const wrapper = mount(Calendar)
        expect(wrapper.exists()).toBe(true)
    })

    it('Calendar默认状态，数据正常', async () => {
        const wrapper = mount(Calendar)
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.dateList.length).toBe(3)
        expect(wrapper.vm.dateList[1].name).toBe(date)
    })

    it('传入v-model，数据正常', async () => {
        const wrapper = mount(Calendar, {
            propsData: {
                value: ['2020/6/1', '2020/7/8']
            }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.dateList.length).toBe(3)
        expect(wrapper.vm.dateList[0].name).toBe('2020/5')
        expect(wrapper.vm.dateList[1].name).toBe('2020/6')
        expect(wrapper.vm.dateList[2].name).toBe('2020/7')
        expect(wrapper.vm.modelValue).toBe('2020/6/1至2020/7/8')
        expect(wrapper.vm.options[0].year).toBe(2020)
        expect(wrapper.vm.options[0].month).toBe(6)
        expect(wrapper.vm.options[0].day).toBe(1)
        expect(wrapper.vm.options[1].year).toBe(2020)
        expect(wrapper.vm.options[1].month).toBe(7)
        expect(wrapper.vm.options[1].day).toBe(8)
    })

    it('异步的v-model，数据正常', async (done) => {
        const wrapper = mount(Calendar)
        setTimeout(async () => {
            wrapper.setProps({ value: ['2020/6/1', '2020/7/8'] })
            await wrapper.vm.$nextTick()
            expect(wrapper.vm.dateList.length).toBe(3)
            expect(wrapper.vm.dateList[0].name).toBe('2020/5')
            expect(wrapper.vm.dateList[1].name).toBe('2020/6')
            expect(wrapper.vm.dateList[2].name).toBe('2020/7')
            expect(wrapper.vm.modelValue).toBe('2020/6/1至2020/7/8')
            expect(wrapper.vm.options[0].year).toBe(2020)
            expect(wrapper.vm.options[0].month).toBe(6)
            expect(wrapper.vm.options[0].day).toBe(1)
            expect(wrapper.vm.options[1].year).toBe(2020)
            expect(wrapper.vm.options[1].month).toBe(7)
            expect(wrapper.vm.options[1].day).toBe(8)
            done()
        }, 2000)
    })

    it('scroll向下滚动，数据正常', async () => {
        const wrapper = mount(Calendar)
        await wrapper.vm.$nextTick()
        const scroll = wrapper.find({ name: 'DateList' })
        scroll.vm.$refs.scroll.scrollTop = 2000;
        scroll.vm.onScroll()
        await wrapper.vm.$nextTick()
        await scroll.vm.$nextTick()
        expect(wrapper.vm.dateList.length).toBe(4)
    })

    it('scroll向上滚动，数据正常', async () => {
        const wrapper = mount(Calendar)
        await wrapper.vm.$nextTick()
        const scroll = wrapper.find({ name: 'DateList' })
        scroll.vm.onScroll({ target: { scrollTop: 0 } })
        await wrapper.vm.$nextTick()
        await scroll.vm.$nextTick()
        expect(wrapper.vm.dateList.length).toBe(4)
    })

})