/*
 * @Author: Fone丶峰
 * @Date: 2020-01-03 14:16:19
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:05:12
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

const type = {
    props: {
        type: {
            type: String,
            default: "default",
            validator: function (value) {
                return ["default", "errer", "success", "warning"].includes(value);
            }
        }
    }
}

module.exports = { type };