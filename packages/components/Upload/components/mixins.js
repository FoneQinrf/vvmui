/*
 * @Author: Fone丶峰
 * @Date: 2020-03-05 14:18:50
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-16 13:10:58
 * @Description: 
 * @Email: qinrifeng@g7.com.cn
 */
export default {
    props: {
        size: {     //图片超过指定大小不让上传
            type: Number,
            default: 3072
        },
        disabled: {  //禁止上传
            type: Boolean
        },
        iconSize: {   //占位icon的大小
            type: Number,
            default: 24
        },
        name: {      //input的原生属性
            type: String,
            default: 'file'
        },
        accept: {   //接受上传的文件类型
            type: Array,
            default() {
                return [];
            }
        },
        acceptErrorMessage: {  //文件类型错误的提示内容
            type: String,
            default: '文件类型错误'
        },
        compress: {         //是否开启图片压缩
            type: Boolean,
            default: true,
        },
        compressSize: {      //超过大小的图片压缩
            type: Number,
            default: 512,
        },
        data: {              //上传附带的内容
            type: Object,
            default() {
                return {};
            },
        },
        action: {           //上传地址
            type: String,
            default: '',
        },
        headers: {         //设置上传的请求头部
            type: Object,
            default() {
                return {};
            },
        },
        showLabel: {    //内部业务需要
            type: String
        },
        response: {    //内部业务需要
            type: String
        },
        imgWidth: {    //图片压缩时指定压缩的图片宽度
            type: [Number, Boolean],
            default: 800,
        },
        quality: {    //图片压缩的质量
            type: Number,
            default: 1,
        },
        beforeUpload: {  //上传文件之前的钩子
            type: Function
        },
        onSuccess: {     //上传成功的钩子
            type: Function
        },
        onError: {       //上传失败的钩子
            type: Function
        },
        onLoadend: {     //文件上传成功或者失败都会执行的钩子
            type: Function
        },
        onProgress: {    //文件上传进度的钩子
            type: Function
        },
        onSuccessText: {   //上传成功的提示内容
            type: String,
            default: '上传成功'
        },
        onErrorText: {    //上传失败的提示内容
            type: String,
            default: '上传失败'
        },
        beforeRemove: {    //删除文件的钩子
            type: Function
        },
        showRemove: {     //是否展示删除icon
            type: Boolean,
            default: true
        },
        type: {           //单文件上传还是多文件上传
            type: String,
            default: 'single',
            validator: function (value) {
                return ["single", "multiple"].includes(value);
            }
        },
        maxNumber: {    //多文件上传最多上传的个数
            type: Number
        },
        isImage: {      //文件是否为图片
            type: Boolean,
            default: true
        }
    }
}