/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-23 14:40:30
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-27 14:13:27
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
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