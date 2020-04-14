/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-14 18:09:53
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */


/**
 * 
 * @param {*} params 
 */
function initModelArray(params) {
    let array = []
    const { options, children, value, keyValue } = params
    if (options.length) {
        if (value.length) {
            const initIndex = (index, date, i, list) => {
                if (typeof index[i] !== 'undefined') {
                    for (let y = 0; y < date.length; y += 1) {
                        if (date[y][keyValue] === index[i]) {
                            list.push(y);
                            initIndex(index, date[y][children], i += 1, list);
                            break;
                        }
                    }
                }
                return list;
            }
            array = initIndex(value, options, 0, [])
        } else {
            const init = option => {
                array.push(0);
                if (option[0][children]) {
                    init(option[0][children]);
                }
            };
            init(options);
        }
    }
    return array
}


/**
 * 计算下标
 * @param {*} options 
 */
export const initIndex = (options) => {
    return initModelArray(options)
}


/**
 * 
 * @param {*} params 
 */
function placeholderArray(params) {
    const { index, list, label, value } = params;
    let context = '';
    if (value.length > 0) {
        if (index.length && list.length) {
            index.forEach((element, i) => {
                context += `${list[i][element][label]} `;
            });
            return context
        }
    }
}

/**
 * 处理placeholder展示
 * @param {*} options 
 */
export const initPlaceholder = (options) => {
    return placeholderArray(options)
}

/**
 * 
 * @param {*} ctx 
 */
function modelArray(ctx) {
    const init = (index, options, i, array) => {
        if (typeof index[i] !== 'undefined' && options[index[i]]) {
            array.push(options[index[i]][ctx.keyValue]);
            init(index, options[index[i]][ctx.children], i += 1, array);
        }
        return array;
    }
    return init(ctx.index, ctx.options, 0, []);
}

/**
 * 处理返回值
 * @param {*} options 
 */
export const initModel = (options) => {
    return modelArray(options)
}