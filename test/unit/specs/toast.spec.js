/*
 * @Author: Fone丶峰
 * @Date: 2020-04-26 16:00:11
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 11:17:30
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import Toast from '@/components/~Toast'
import Vue from "vue";
describe('Toast', () => {
    it('info', async () => {
        Toast.info('info');
        await Vue.nextTick()
        const Install = Toast.Install.instance.$mount();
        expect(Install.context).toBe('info')
        expect(Install.value).toBe(true);
    })

    it('success', async () => {
        Toast.success('success');
        await Vue.nextTick()
        const Install = Toast.Install.instance.$mount();
        expect(Install.context).toBe('success')
        expect(Install.value).toBe(true);
        expect(Install.$el.querySelector('.success').className).toMatch(/success/);
    })

    it('errer', async () => {
        Toast.errer('errer');
        await Vue.nextTick()
        const Install = Toast.Install.instance.$mount();
        expect(Install.context).toBe('errer')
        expect(Install.value).toBe(true);
        expect(Install.$el.querySelector('.errer').className).toMatch(/errer/);
    })

    it('warning', async () => {
        Toast.warning('warning');
        await Vue.nextTick()
        const Install = Toast.Install.instance.$mount();
        expect(Install.context).toBe('warning')
        expect(Install.value).toBe(true);
        expect(Install.$el.querySelector('.warning').className).toMatch(/warning/);
    })

    it('info', async () => {
        Toast.info({
            context: 'info',
            duration: 4000,
            mask: true
        });
        await Vue.nextTick()
        const Install = Toast.Install.instance.$mount();
        expect(Install.context).toBe('info')
        expect(Install.value).toBe(true);
        expect(Install.duration).toBe(4000);
        expect(Install.mask).toBe(true);
    })

    it('success object', async () => {
        Toast.success({
            context: 'success',
            duration: 4000,
            mask: true
        });
        await Vue.nextTick()
        const Install = Toast.Install.instance.$mount();
        expect(Install.context).toBe('success')
        expect(Install.value).toBe(true);
        expect(Install.duration).toBe(4000);
        expect(Install.mask).toBe(true);
        expect(Install.$el.querySelector('.success').className).toMatch(/success/);
    })

    it('clear', async (done) => {
        Toast.info({
            context: 'success',
            clear: () => {
                done()
            }
        });
    })

    it('icon', async () => {
        Toast.info({
            context: 'success',
            icon: "iconuncheck"
        });
        await Vue.nextTick()
        const Install = Toast.Install.instance.$mount();
        expect(Install.icon).toBe('iconuncheck');
        expect(Install.$el.querySelector('.iconuncheck').className).toMatch(/iconuncheck/);
    })

    it('close', async () => {
        Toast.info('info');
        await Vue.nextTick()
        Toast.close();
        const Install = Toast.Install.instance.$mount();
        expect(Install.value).toBe(false);
    })
})