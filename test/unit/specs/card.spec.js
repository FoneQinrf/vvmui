/*
 * @Author: Fone丶峰
 * @Date: 2020-04-01 11:07:37
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-13 17:50:04
 * @Description: 
 * @Email: qinrifeng@163.com
 */

import { mount } from 'vue-test-utils'
import Card from '@/../packages/components/Card'
import Vue from "vue";

describe('Card.vue', () => {
    it('Card存在', () => {
        const wrapper = mount(Card)
        expect(wrapper.exists()).toBe(true)
    })
    it('title-text="头部标题"，数据正常', () => {
        const wrapper = mount(Card, {
            propsData: {
                titleText: '头部标题'
            }
        })
        expect(wrapper.props().titleText).toBe('头部标题')
    })
    it(':is-title="false"，隐藏头部内容正常', () => {
        const wrapper = mount(Card, {
            propsData: {
                isTitle: false
            }
        })
        expect(wrapper.find('.Am-Card-title').exists()).toBe(false)
    })
    it('左右上角slot，UI内容正常', async () => {
        const wrapper = mount(Card, {
            slots: {
                'title-right': '<span class="title-right">内容</span>',
                'title-left': '<span class="title-left">内容</span>'
            }
        })
        await Vue.nextTick();
        expect(wrapper.find('.title-right').exists()).toBe(true)
        expect(wrapper.find('.title-left').exists()).toBe(true)
    })
    it('shadow，背景阴影正常', async () => {
        const wrapper = mount(Card, {
            propsData: {
                shadow: true
            }
        })
        await Vue.nextTick();
        expect(wrapper.classes()).toContain('shadow')
    })
})