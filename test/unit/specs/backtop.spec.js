/*
 * @Author: Fone丶峰
 * @Date: 2020-04-30 09:38:25
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-30 14:11:55
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

    it('Backtop', () => {
        const wrapper = mount(Backtop, {
            propsData: {
                right: 100,
                bottom: 100
            }
        })
        expect(wrapper.find('.vvm-Backtop').html()).toContain(`
            < div class= "vvm-Backtop" style = "right: 100px; bottom: 100px; display: none;" name = "fade" ></div >
        `)
    })
})