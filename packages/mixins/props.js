/* props type
 * @Author: Fone丶峰 
 * @Date: 2020-01-03 14:17:34 
 * @Last Modified by: Fone丶峰
 * @Last Modified time: 2020-01-03 14:22:11
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