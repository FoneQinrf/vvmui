/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-09-19 13:30:48
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-30 10:52:46
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
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
            const router = this.$router;
            if (!router) {
                throw new Error("error:There is no router");
            }
            const { replace, to, url } = this;
            const model = replace ? 'replace' : 'push';
            if (to) {
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