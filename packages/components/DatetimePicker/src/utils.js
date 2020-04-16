/*
 * @Author: Fone丶峰
 * @Date: 2020-04-15 14:41:39
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-15 18:21:27
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
/**
 * 创建年份数据
 * @param {*} ctx 
 */
export const createYear = (ctx) => {
    let i = ctx.minYear;
    const array = []
    while (i <= ctx.maxYear) {
        array.push(i)
        i += 1
    }
    return array;
}

/**
 * 创建月份数据
 */
export const createMonth = () => {
    let i = 1;
    const array = [];
    while (i <= 12) {
        array.push(i >= 10 ? i : `0${i}`);
        i += 1;
    }
    return array;
}

/**
 * 创建天的数据
 * @param {*} ctx 
 */
export const createDay = (ctx) => {
    const count = new Date(ctx.timeItem[0], ctx.timeItem[1], 0).getDate();
    let i = 1;
    const array = []
    while (i <= count) {
        array.push(i >= 10 ? i : `0${i}`)
        i += 1
    }
    return array
}

/**
 * 
 * @param {*} value 
 */
export const createTimeItem = (value) => {
    const ctx = value ? new Date(value) : new Date()
    const month = ctx.getMonth() + 1
    const hours = ctx.getHours() >= 10 ? ctx.getHours() : `0${ctx.getHours()}`
    const date = ctx.getDate() >= 10 ? ctx.getDate() : `0${ctx.getDate()}`
    const minute = ctx.getMinutes() >= 10 ? ctx.getMinutes() : `0${ctx.getMinutes()}`
    const second = ctx.getSeconds() >= 10 ? ctx.getSeconds() : `0${ctx.getSeconds()}`
    return [ctx.getFullYear(), month >= 10 ? month : `0${month}`, date, hours, minute, second]
}

/**
 * 计算下标
 * @param {*} ctx 
 */
export const createIndex = (ctx) => {
    const array = []
    ctx.options.forEach((element, index) => {
        if (ctx.type === 'time') {
            array.push(element.indexOf(ctx.timeItem[index + 3]))
        } else {
            array.push(element.indexOf(ctx.timeItem[index]))
        }
    });
    return array;
}

/**
 * 计算24小时
 */
export const createHours = () => {
    let i = 0;
    const array = []
    while (i < 24) {
        array.push(i >= 10 ? i : `0${i}`)
        i += 1
    }
    return array;
}

/**
 * 计算分钟和秒
 */
export const createMinute = () => {
    let i = 0;
    const array = []
    while (i < 60) {
        array.push(i >= 10 ? i : `0${i}`)
        i += 1
    }
    return array
}

/**
 * 格式化时间
 * @param {*} fmt 
 * @param {*} date 
 */
export const format = (fmt, date) => {
    /* eslint-disable */
    let ret;
    const opt = {
        "Y+": date.getFullYear().toString(),        // 年
        "m+": (date.getMonth() + 1).toString(),     // 月
        "d+": date.getDate().toString(),            // 日
        "H+": date.getHours().toString(),           // 时
        "M+": date.getMinutes().toString(),         // 分
        "S+": date.getSeconds().toString()          // 秒
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
        };
    };
    return fmt;
    /* eslint-disable */
}