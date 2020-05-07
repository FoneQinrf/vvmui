/*
 * @Author: Fone丶峰
 * @Date: 2020-05-06 16:17:17
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-06 16:30:39
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
const Transition = {
    beforeEnter(el) {
        if (!el.dataset) el.dataset = {};
        el.style.height = 0;
    },

    enter(el) {
        if (el.scrollHeight !== 0) {
            el.style.height = `${el.scrollHeight}px`;
        } else {
            el.style.height = '';
        }
        el.style.overflow = 'hidden';
    },

    afterEnter(el) {
        el.style.height = '';
    },

    beforeLeave(el) {
        if (!el.dataset) el.dataset = {};
        el.style.display = 'block';
        el.style.height = `${el.scrollHeight}px`;
        el.style.overflow = 'hidden';
    },

    leave(el) {
        if (el.scrollHeight !== 0) {
            el.style.height = 0;
        }
    },

    afterLeave(el) {
        el.style.height = '';
    }
}

export default {
    name: 'CollapseTransition',
    functional: true,
    render(h, { children }) {
        const data = {
            on: Transition,
        };
        return h('transition', data, children);
    },
};