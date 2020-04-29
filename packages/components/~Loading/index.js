/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-28 13:05:44
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

import spin from "./spin";
import loadingBar from "./loadingBar";
const { version } = require('#/package.json')

export default {
    name: 'Loading',
    version,
    loadingBar,
    spin
}