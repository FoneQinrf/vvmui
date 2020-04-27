/*
 * @Author: Fone丶峰
 * @Date: 2020-04-27 14:16:14
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-27 14:43:29
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Vue from "vue";
import Notify from '@/components/Notify'

describe('Notify', () => {
    it('Notify create', async () => {
        const info = Notify.info('info')
        await Vue.nextTick()
        expect(info.show).toBe(true)
        expect(info.clasess).toContain('vvm-back-color-default')
        expect(info.context).toBe('info')

        const success = Notify.success('success')
        await Vue.nextTick()
        expect(success.show).toBe(true)
        expect(success.clasess).toContain('vvm-back-color-success')
        expect(success.context).toBe('success')

        const errer = Notify.errer('errer')
        await Vue.nextTick()
        expect(errer.show).toBe(true)
        expect(errer.clasess).toContain('vvm-back-color-errer')
        expect(errer.context).toBe('errer')

        const warning = Notify.warning('warning')
        await Vue.nextTick()
        expect(warning.show).toBe(true)
        expect(warning.clasess).toContain('vvm-back-color-warning')
        expect(warning.context).toBe('warning')
    })

    it('Notify clear', async (done) => {
        Notify.info({
            clear: () => {
                done()
            }
        })
    })

    it('Notify close', async () => {
        const info = Notify.info({
            duration: 5000
        })
        await Vue.nextTick()
        expect(info.duration).toBe(5000)
        info.close()
        expect(info.show).toBe(false)
    })

    it('Notify icon', async () => {
        const info = Notify.info({
            icon: 'icon'
        })
        await Vue.nextTick()
        expect(info.$el.querySelector('.icon').className).toMatch(/icon/);
    })
})