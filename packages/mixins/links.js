/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-09-19 13:30:48
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-09-19 14:27:45
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
                console.error("error:There is no router");
                return
            }
            const { replace, to, url } = this;
            const model = replace ? 'replace' : 'push';
            if (to) {
                router[model](to);
                return
            }
            if (url) {
                if (replace) {
                    window.location.replace(url)
                    return
                }
                window.location.href = url
            }
        }
    }
}