/*
 * @Author: Fone丶峰
 * @Date: 2020-04-30 09:38:25
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-07 11:14:09
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from 'vue-test-utils'
import Backtop from '@/components/Backtop'

describe('Backtop.vue', () => {
    it('Backtop', () => {
        const wrapper = mount(Backtop)
        expect(wrapper.exists()).toBe(true)
    })
})