/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:28
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-08 10:07:34
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */

export default {
    props: {
        to: {
            type: [Object, String]
        },
        url: {
            type: String
        },
        replace: {
            type: Boolean
        }
    },
    methods: {
        handleLink() {
            const { replace, to, url } = this;
            const model = replace ? 'replace' : 'push';
            if (to) {
                const router = this.$router;
                if (!router) {
                    throw new Error("error:There is no router");
                }
                router[model](to);
                return
            }
            if (url) {
                if (replace) {
                    if (window) {
                        window.location.replace(url)
                    }
                    return
                }
                if (window) {
                    window.location.href = url
                }
            }
        }
    }
}