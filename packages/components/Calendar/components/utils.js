/*
 * @Author: Fone丶峰
 * @Date: 2020-04-08 09:48:03
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 16:28:33
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */


export const weekList = [{ name: '日', class: 'Am-Calendar-week-Weekend' },
{ name: '一', class: '' },
{ name: '二', class: '' },
{ name: '三', class: '' },
{ name: '四', class: '' },
{ name: '五', class: '' },
{ name: '六', class: 'Am-Calendar-week-Weekend' },
];

export const weeks = ['日', '一', '二', '三', '四', '五', '六'];

/**
 * 时间date格式为YYYY/MM日期
 * @param {*} date 
 */
export function getDate(date) {
    return `${date.getFullYear()}/${date.getMonth() + 1}`
}

/**
 * 根据年月计算月份有几天
 * @param {*} params 
 */
function getCount(params) {
    const date = new Date(params);
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

/**
 * 根据日期计算时周几
 * @param {*} date 
 */
export function getweekday(date) {
    const weekArray = ["日", "一", "二", "三", "四", "五", "六"];
    const week = weekArray[new Date(date).getDay()];
    return week;
}

/**
 * 计算具体某个月的时间数据
 * @param {*} count 
 * @param {*} element 
 */
function getDateList(count, element) {
    let i = 0;
    const array = { name: element, list: [] };
    while (i < count) {
        i += 1;
        const date = new Date(element);
        array.list.push({ year: date.getFullYear(), month: date.getMonth() + 1, day: i, week: getweekday(`${element}-${i}`), disabled: false });
    }
    return array;
}


/**
 * 根据时间获取 年月日 周几
 * @param {*} date 
 */
export function optionsFnc(date) {
    const options = new Date(date);
    return {
        year: options.getFullYear(),
        month: options.getMonth() + 1,
        day: options.getDate(),
        week: getweekday(date)
    }
}

/**
 * 计算日期的前一个月
 * @param {*} date 
 */
/* eslint-disable */
function getPreMonth(date) {
    const options = new Date(date)
    let year = options.getFullYear()
    let month = options.getMonth() + 1
    return month - 1 > 0 ? `${year}/${month - 1}` : `${year - 1}/${12}`
}
/* eslint-disable */

/**
 * 计算日期的下一个月
 * @param {*} date 
 */
/* eslint-disable */
function getNextMonth(date) {
    const options = new Date(date)
    let year = options.getFullYear()
    let month = options.getMonth() + 1
    return month + 1 <= 12 ? `${year}/${month + 1}` : `${year + 1}/${1}`
}
/* eslint-disable */

/**
 * 根据时间计算上一个月的数据
 * @param {*} date 
 */
export function getPreMonthList(date) {
    const array = [getPreMonth(date)]
    const list = [];
    array.forEach(element => {
        list.push(getDateList(getCount(element), element));
    });
    return list
}

/**
 * 根据时间计算下一个月的数据
 * @param {*} date 
 */
export function getNextMonthList(date) {
    const array = [getNextMonth(date)]
    const list = [];
    array.forEach(element => {
        list.push(getDateList(getCount(element), element));
    });
    return list
}

/**
 * 初始化时间
 * @param {*} locationDate 
 * @param {*} value 
 * @param {*} type 
 */
export function initDate(locationDate, value, type) {
    const list = []
    let date;
    let location = new Date()
    if (value && value.length) {
        date = type === 'range' ? value[0] : value
        location = new Date(date)
    } else {
        date = locationDate ? `${locationDate.getFullYear()}/${locationDate.getMonth() + 1}` : `${location.getFullYear()}/${location.getMonth() + 1}`
    }
    const array = [getPreMonth(date), getDate(location), getNextMonth(date)]
    array.forEach(element => {
        list.push(getDateList(getCount(element), element));
    });
    return list
}
