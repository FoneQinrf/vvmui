/*
 * @Author: Fone丶峰
 * @Date: 2020-04-28 16:36:38
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 17:54:15
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { mount } from 'vue-test-utils'
import Image from '@/components/Image'

describe('Image.vue', () => {
    it('Image fit', async () => {
        const wrapper = mount(Image, {
            propsData: {
                fit: 'contain'
            }
        })
        await wrapper.vm.$nextTick()
        expect(wrapper.vm.style).toEqual({ objectFit: 'contain' })
    })

    it('Image lazy', async () => {
        const wrapper = mount(Image, {
            propsData: {
                lazy: true,
                src: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2075903360,405209795&fm=26&gp=0.jpg'
            }
        })
        wrapper.vm.$nextTick();
        expect(wrapper.vm.status).toBe('loading')
        wrapper.vm.onload();
        expect(wrapper.vm.status).toBe('load-success')
        wrapper.vm.onerror();
        expect(wrapper.vm.status).toBe('load-error')
    })
})