/*
 * @Author: Fone丶峰
 * @Date: 2020-04-26 14:17:59
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-26 14:28:43
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
import { format } from "@/components/DatetimePicker/src/utils.js";
export default {
    filters: {
        /**
         * 时间格式化
         * @param {*} fmt 
         * @param {*} date 
         */
        vvmFormatDate(fmt, date) {
            const options = typeof date === 'string' ? new Date(date) : date
            return format(fmt, options);
        }
    }
}