/* eslint-disable */
/*
 * @Author: Fone丶峰
 * @Date: 2020-04-20 15:12:38
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 16:07:22
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
/**
 * 滚动条在Y轴上的滚动距离
 * @param {*} ref
 */
function getScrollTop(ref) {
    let scrollTop = 0; let bodyScrollTop = 0; let
        documentScrollTop = 0;
    if (ref) {
        bodyScrollTop = ref.scrollTop;
    }
    if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    return Math.ceil(scrollTop);
}
/**
 * 文档的总高度
 * @param {*} ref
 */
function getScrollHeight(ref) {
    return ref.children[0].offsetHeight;
}
/**
 * 滑动视口的高度
 * @param {*} ref
 */
function getWindowHeight(ref) {
    let windowHeight = 0;
    if (ref) {
        windowHeight = ref.clientHeight;
    }
    return windowHeight;
}
function isFoot(ref = document.body, num = 0) {
    const height = getScrollTop(ref) + getWindowHeight(ref);
    if (height === (getScrollHeight(ref) - num)) {
        return true;
    }
    if (height > (getScrollHeight(ref) - num)) {
        return true;
    }
    return false;
}
export default isFoot;