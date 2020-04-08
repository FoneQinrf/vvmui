/*
 * @Author: Fone丶峰
 * @Date: 2020-04-01 11:07:37
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 18:25:58
 * @Description: 
 * @Email: qinrifeng@163.com
 */

import { mount } from 'vue-test-utils'
import ActionSheet from '@/../packages/components/ActionSheet'
import Vue from "vue";

describe('ActionSheet.vue', () => {
    it('ActionSheet存在', () => {
        const wrapper = mount(ActionSheet)
        expect(wrapper.exists()).toBe(true)
    })
})