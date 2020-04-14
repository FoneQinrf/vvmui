/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:05:33
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

/**
 * 兼容滑动事件
 */
export const onTouchstart = (function () {
    if (!isServer && document.addEventListener) {
        return function (element, callback) {
            element.addEventListener('touchstart', callback, false);
            element.addEventListener('mousedown', callback, false);
        }
    }
}())

export const onTouchmove = (function () {
    if (!isServer && document.addEventListener) {
        return function (element, callback) {
            element.addEventListener('touchmove', callback, false);
            element.addEventListener('mousemove', callback, false);
        }
    }
}())

export const onTouchend = (function () {
    if (!isServer && document.addEventListener) {
        return function (element, callback) {
            element.addEventListener('touchend', callback, false);
            element.addEventListener('mouseup', callback, false);
        }
    }
}())

export const on = (function () {
    if (!isServer && document.addEventListener) {
        return function (element, event, callback) {
            element.addEventListener(event, callback, false);
        }
    }
    return function (element, event, handler) {
        element.attachEvent(`on${event}`, handler);
    };
}())

export const off = (function () {
    if (!isServer && document.removeEventListener) {
        return function (element, event, callback) {
            element.removeEventListener(event, callback, false);
        }
    }
    return function (element, event, handler) {
        element.removeEventListener(`on${event}`, handler);
    };
}())
