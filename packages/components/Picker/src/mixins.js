/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-26 10:20:14
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */


export default {
    props: {
        options: {
            type: Array,
            default: function () {
                return [];
            }
        },
        height: {
            type: Number,
            default: 44
        },
        label: {
            type: String,
            default: "label"
        }
    },
    computed: {
        PickerHeight() {
            return {
                height: `${this.height * 5}px`
            };
        },
    }
}