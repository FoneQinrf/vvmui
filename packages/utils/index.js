/*
 * @Author: Fone丶峰
 * @Date: 2019-11-06 14:03:19
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:05:40
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */


/**
 * 根据组件名称查找所有下级对应的组件(特定的层级关系，没法跨级查询)
 * @param {*} context
 * @param {*} componentName
 */
export const findComponentsDownward = (context, componentName) => {
    const array = [];
    for (let i = 0; i < context.$children.length; i += 1) {
        if (context.$children[i].$options.name === componentName) {
            array.push(context.$children[i]);
        }
    }
    return array;
};

/**
   * 查找上级是否有存在对应组件
   * @param {*} context
   * @param {*} componentName
   * @param {*} componentNames
   */
export const findComponentUpward = (context, componentName, componentNames) => {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }
    let parent = context.$parent;
    let name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) { name = parent.$options.name; }
    }
    return parent;
};

/**
 * 根据componentName找到指定上级组件实例
 * @param {*} context 
 * @param {*} componentName 
 * @param {*} component 
 */
export const parentComponent = (context, componentName, component) => {
    const fnc = (ctx) => {
        if (!ctx.$parent) {
            return
        }
        if (ctx.$parent.$options.name === componentName) {
            component = ctx.$parent
            return
        }
        fnc(ctx.$parent)
    }
    fnc(context);
    return component
}

/**
 * scroll滚动到指定位置
 * @param {*} scrollNum 
 * @param {*} target 
 */
export const scrollToTop = (scrollNum, target) => {
    target.scrollTo({
        top: scrollNum,
        behavior: "smooth"
    });
}

/**
 * 计算宽度的vw值
 * @param {*} witdh 
 */
export const vwWitdh = (px) => {
    if (window) {
        const witdh = document.body.clientWidth;
        return `${(px * 100) / witdh}vw` || 'auto'
    }
}