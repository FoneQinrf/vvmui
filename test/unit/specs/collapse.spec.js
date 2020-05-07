/*
 * @Author: Fone丶峰
 * @Date: 2020-05-06 11:05:29
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-06 18:04:22
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Vue from "vue";
import Collapse from '@/components/Collapse'
import CollapseGroup from '@/components/CollapseGroup'
import { findComponentsDownward, findComponentsDownwardList } from "../utils";

describe('Collapse.vue', () => {
    it('title', async () => {
        const component = new Vue({
            render(h) {
                return (
                    <CollapseGroup>
                        <Collapse title="标题一"></Collapse>
                    </CollapseGroup>
                )
            }
        })
        await Vue.nextTick()
        const vm = findComponentsDownward(findComponentsDownward(component.$mount(), 'Collapse-Group'), 'Collapse')
        expect(vm.$el.querySelector('.vvm-Collapse-header--title')).not.exist;
    })

    it('click', async () => {
        const component = new Vue({
            render(h) {
                return (
                    <CollapseGroup>
                        <Collapse name="1" title="标题一"></Collapse>
                        <Collapse name="2" title="标题二"></Collapse>
                        <Collapse name="3" title="标题三"></Collapse>
                    </CollapseGroup>
                )
            }
        })
        await Vue.nextTick()
        const parent = findComponentsDownward(component.$mount(), 'Collapse-Group');
        const [one, tow, three] = findComponentsDownwardList(parent, 'Collapse')
        expect(one.name).toBe('1')
        expect(tow.name).toBe('2')
        expect(three.name).toBe('3')
        one.click()
        await Vue.nextTick()
        expect(parent.currentValue).toEqual(['1'])
        expect(one.isActive).toBe(true)
        expect(tow.isActive).toBe(false)
        expect(three.isActive).toBe(false)
        tow.click()
        await Vue.nextTick()
        expect(parent.currentValue).toEqual(['1', '2'])
        expect(one.isActive).toBe(true)
        expect(tow.isActive).toBe(true)
        expect(three.isActive).toBe(false)
        one.click()
        await Vue.nextTick()
        expect(parent.currentValue).toEqual(['2'])
        expect(one.isActive).toBe(false)
        expect(tow.isActive).toBe(true)
        expect(three.isActive).toBe(false)
    })

    it('accordion', async () => {
        const component = new Vue({
            render(h) {
                return (
                    <CollapseGroup accordion={true}>
                        <Collapse name="1" title="标题一"></Collapse>
                        <Collapse name="2" title="标题二"></Collapse>
                        <Collapse name="3" title="标题三"></Collapse>
                    </CollapseGroup>
                )
            }
        })
        await Vue.nextTick()
        const parent = findComponentsDownward(component.$mount(), 'Collapse-Group');
        const [one, tow, three] = findComponentsDownwardList(parent, 'Collapse')
        expect(one.name).toBe('1')
        expect(tow.name).toBe('2')
        expect(three.name).toBe('3')
        one.click()
        await Vue.nextTick()
        expect(parent.currentValue).toBe('1')
        expect(one.isActive).toBe(true)
        expect(tow.isActive).toBe(false)
        expect(three.isActive).toBe(false)
        tow.click()
        await Vue.nextTick()
        expect(parent.currentValue).toBe('2')
        expect(one.isActive).toBe(false)
        expect(tow.isActive).toBe(true)
        expect(three.isActive).toBe(false)
        tow.click()
        await Vue.nextTick()
        expect(parent.currentValue).toBe('')
        expect(one.isActive).toBe(false)
        expect(tow.isActive).toBe(false)
        expect(three.isActive).toBe(false)
    })
})