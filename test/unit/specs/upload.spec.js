/*
 * @Author: Fone丶峰
 * @Date: 2020-04-20 10:49:38
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-22 15:46:35
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from 'vue-test-utils'
import Upload from '@/components/Upload'

describe('Upload.vue', () => {
    it('Upload存在', () => {
        const wrapper = mount(Upload)
        expect(wrapper.exists()).toBe(true)
    })
})