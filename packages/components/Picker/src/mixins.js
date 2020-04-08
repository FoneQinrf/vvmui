/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 10:02:52
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
            default: 38
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