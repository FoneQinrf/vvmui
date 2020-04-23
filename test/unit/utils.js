/*
 * @Author: Fone丶峰
 * @Date: 2020-04-21 15:15:22
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-22 10:16:54
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

/**
 * 
 * @param {*} context 
 * @param {*} componentName 
 */
export const findComponentsDownward = (context, componentName) => {
    let options;
    for (let i = 0; i < context.$children.length; i += 1) {
        if (context.$children[i].$options.name === componentName) {
            options = context.$children[i]
            break
        }
    }
    return options;
}

/**
 * 
 * @param {*} context 
 * @param {*} componentName 
 */
export const findComponentsDownwardList = (context, componentName) => {
    const array = []
    for (let i = 0; i < context.$children.length; i += 1) {
        if (context.$children[i].$options.name === componentName) {
            array.push(context.$children[i])
        }
    }
    return array;
}