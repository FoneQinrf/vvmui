/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-29 17:24:34
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-30 17:01:14
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */


/**
 * 
 * @param {*} value 
 */
function flag(value) {
    const array = [];
    if (value) {
        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                array.push(value[key] === "");
            }
        }
    }
    return array.length > 0 && !array.includes(true)
}

/**
 * 
 * @param {*} value 
 */
export const typeOF = (value) => Object.prototype.toString.call(value).match(/ (\S*)]/)[1];

/**
 * 
 * @param {*} params 
 */
function initModelObject(params) {
    const array = []
    const { value, options, children, keyValue, model } = params
    if (options.length && !flag(value)) {
        const init = option => {
            array.push(0);
            if (option[0][children]) {
                init(option[0][children]);
            }
        };
        init(options);
        return array
    }
    if (options.length && flag(value) && model.length) {
        const init = (option, count) => {
            let x;
            if (count < model.length && option) {
                for (let i = 0; i < option.length; i += 1) {
                    if (option[i][keyValue] === value[model[count]]) {
                        x = i;
                        array.push(i);
                        break;
                    }
                }
                init(option[x][children], count + 1);
            }
        };
        init(options, 0);
        return array;
    }
    return array
}

/**
 * 
 * @param {*} params 
 */
function initModelArray(params) {
    let array = []
    const { options, children, value } = params
    if (options.length) {
        if (value.length) {
            array = JSON.parse(JSON.stringify(value))
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
 * 
 * @param {*} params 
 */
function initModelString(params) {
    let i;
    const { options, keyValue, value } = params
    if (options.length) {
        for (let x; x < options.length; x += 1) {
            if (options[x][keyValue]) {
                if (options[x][keyValue] === value) {
                    i = x
                    break
                }
                return
            }
            if (options[x] === value) {
                i = x
                break
            }
        }
        return [i]
    }
    return [0]
}

/**
 * 计算下标
 * @param {*} options 
 */
export const initIndex = (options) => {
    const fnc = {
        fncArray: initModelArray,
        fncObject: initModelObject,
        fncString: initModelString
    };
    return fnc[`fnc${typeOF(options.value)}`](options)
}

/**
 * 
 * @param {*} params 
 */
function placeholderObject(params) {
    const { value, model, index, list, keyValue, label, placeholder } = params
    let context = ''
    if (flag(value) && model.length && index.length && list.length) {
        list.forEach((element, i) => {
            for (const iterator of element) {
                if (iterator[keyValue] === value[model[i]]) {
                    context += `${iterator[label]} `;
                    break;
                }
            }
        });
        return context
    }
    return placeholder
}

/**
 * 
 * @param {*} params 
 */
function placeholderString(params) {
    const { value, list, placeholder, label, keyValue } = params
    let context = placeholder
    if (value) {
        list.forEach(element => {
            if (value === element[keyValue]) {
                context = element[label]
            }
        });
    }
    return context
}

/**
 * 
 * @param {*} params 
 */
function placeholderArray(params) {
    const { value, list, placeholder, label } = params;
    let context = '';
    if (value.length && list.length) {
        value.forEach((element, index) => {
            context += `${list[index][element][label]} `;
        });
        return context
    }
    return placeholder
}

/**
 * 处理placeholder展示
 * @param {*} options 
 */
export const initPlaceholder = (options) => {
    const fnc = {
        fncArray: placeholderArray,
        fncObject: placeholderObject,
        fncString: placeholderString
    };
    return fnc[`fnc${typeOF(options.value)}`](options)
}

/**
 * 
 * @param {*} params 
 */
function modelObject(params) {
    const { options, index, model, children, keyValue } = params
    const obj = {};
    const init = (option, i) => {
        if (i < index.length && option) {
            obj[model[i]] = option[index[i]][keyValue];
            init(option[index[i]][children], i + 1);
        }
    };
    init(options, 0);
    return obj;
}

/**
 * 
 * @param {*} params 
 */
function modelString(params) {
    const { index, options, keyValue } = params
    return options[index[0]][keyValue]
}

/**
 * 
 * @param {*} params 
 */
function modelArray(params) {
    const { index } = params
    return index
}

/**
 * 处理返回值
 * @param {*} options 
 */
export const initModel = (options) => {
    const fnc = {
        fncArray: modelArray,
        fncObject: modelObject,
        fncString: modelString
    };
    return fnc[`fnc${typeOF(options.value)}`](options)
}