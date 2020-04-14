/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:25
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-13 16:15:38
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
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
