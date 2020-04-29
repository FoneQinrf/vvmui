/*
 * @Author: Fone丶峰
 * @Date: 2020-04-26 14:09:27
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 11:42:51
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { parentComponent } from '@/utils/index.js'

/**
 * 
 * @param {*} componentName 
 * @param {*} eventName 
 * @param {*} params 
 * @param {*} ctx 
 * @param {*} parent 
 */
function dispatch(componentName, eventName, params, ctx, parent) {
    parent = parentComponent(ctx, componentName)
    if (!parent) {
        return
    }
    parent.itemVal = params;
    parent.eventName = eventName;
    parent.validator(eventName, params);
}

export default dispatch;