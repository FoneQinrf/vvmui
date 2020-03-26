/*
 * @Descripttion: 组件样式打包配置
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 09:35:58
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-22 09:45:46
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */

module.exports = {
    "plugins": {
        "postcss-import": {},
        "postcss-url": {},
        // to edit target browsers: use "browserslist" field in package.json
        "autoprefixer": {},
        "postcss-aspect-ratio-mini": {},
        "postcss-write-svg": { utf8: false },
        "postcss-px-to-viewport": {
            viewportWidth: 375, // (Number) The width of the viewport. 
            viewportHeight: 667, // (Number) The height of the viewport. 
            unitPrecision: 6, // (Number) The decimal numbers to allow the REM units to grow to. 
            viewportUnit: 'vw', // (String) Expected units. 
            selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
            minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
            mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
        },
        "postcss-viewport-units": {}
    }
}
