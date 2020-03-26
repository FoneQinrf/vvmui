/*
 * @Author: Fone丶峰
 * @Date: 2020-02-24 09:54:33
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-02 16:35:12
 * @Description: 
 * @Email: qinrifeng@g7.com.cn
 */
export const weekList = [{ name: '日', class: 'g7-Calendar-week-Weekend' },
{ name: '一', class: '' },
{ name: '二', class: '' },
{ name: '三', class: '' },
{ name: '四', class: '' },
{ name: '五', class: '' },
{ name: '六', class: 'g7-Calendar-week-Weekend' },
];

export const weeks = ['日', '一', '二', '三', '四', '五', '六'];

/**
 * 时间date格式为YYYY-MM日期
 * @param {*} date 
 */
export function getDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}`
}

/**
 * 计算两个时间段所有月份
 * @param {*} start 
 * @param {*} end 
 */
function getMonthBetween(start, end) {
    const array = [];
    let staYear = parseInt(start.getFullYear(), 10);
    let staMon = start.getMonth() + 1;
    const endYear = parseInt(end.getFullYear(), 10);
    const endMon = end.getMonth() + 1;
    while (staYear <= endYear) {
        if (staYear === endYear) {
            while (staMon < endMon) {
                staMon += 1;
                array.push(`${staYear}-${staMon}`);
            }
            staYear += 1;
        } else {
            if (staMon > 12) {
                staMon = 1;
                staYear += 1;
            }
            array.push(`${staYear}-${staMon}`);
            staMon += 1;
        }
    }
    return array;
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

export function dateList(ctx) {
    const monthBetween = getMonthBetween(ctx.minDate, ctx.maxDate);
    const array = [];
    monthBetween.forEach(element => {
        array.push(getDateList(getCount(element), element));
    });
    return array;
}