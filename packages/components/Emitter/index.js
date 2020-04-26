/*
 * @Author: Fone丶峰
 * @Date: 2020-04-26 14:09:27
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-26 16:12:24
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import emitter from '@/utils/emitter.js'

export default {
    mixins: [emitter],
    methods: {
        /**
         * from触发校验方法
         * @param {*} ctx 
         * @param {*} componentName 
         * @param {*} eventName 
         * @param {*} params 
         */
        vvmDispatch(componentName, eventName, params, ctx) {
            this.dispatch(componentName, eventName, params, ctx)
        },
    },
};