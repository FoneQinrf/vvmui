/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-14 11:01:51
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-05-09 11:31:05
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */
module.exports = [
    {
        name: '开发指南',
        children: [
            {
                name: '介绍',
                path: '/main/introduce'
            },
            {
                name: '快速上手',
                path: '/main/quickstart'
            },
            {
                name: '更新日志',
                path: '/main/updata'
            },
            {
                name: '内置样式',
                path: '/main/style'
            }
        ]
    },
    {
        name: '组件',
        children: [
            {
                name: '基础组件',
                children: [
                    {
                        name: 'Icon - 图标',
                        path: '/main/Icon'
                    },
                    {
                        name: 'Button - 按钮',
                        path: '/main/Button'
                    },
                    {
                        name: 'Cell - 单元格',
                        path: '/main/Cell'
                    },
                    {
                        name: 'Card - 卡片',
                        path: '/main/Card'
                    },
                    {
                        name: 'Image - 图片展示',
                        path: '/main/Image'
                    },
                    {
                        name: 'Collapse - 折叠面板',
                        path: '/main/Collapse'
                    },
                    {
                        name: 'Model - 模态窗',
                        path: '/main/Model'
                    }
                ]
            },
            {
                name: '表单组件',
                children: [
                    {
                        name: 'Input - 输入框',
                        path: '/main/Input'
                    },
                    {
                        name: 'NumberInput - 数字键盘',
                        path: '/main/NumberInput'
                    },
                    {
                        name: 'Switch - 开关',
                        path: '/main/Switch'
                    },
                    {
                        name: 'Checkbox - 多选',
                        path: '/main/Checkbox'
                    },
                    {
                        name: 'Radio - 单选',
                        path: '/main/Radio'
                    },
                    {
                        name: 'ActionSheet - 上拉菜单',
                        path: '/main/ActionSheet'
                    },
                    {
                        name: 'Picker - 选择器',
                        path: '/main/Picker'
                    },
                    {
                        name: 'DatetimePicker - 时间选择',
                        path: '/main/DatetimePicker'
                    },
                    {
                        name: 'Calendar - 日历选择',
                        path: '/main/Calendar'
                    },
                    {
                        name: 'Upload - 文件上传',
                        path: '/main/Upload'
                    },
                    {
                        name: 'From - 表单校验',
                        path: '/main/From'
                    }
                ]
            },
            {
                name: '交互组件',
                children: [
                    {
                        name: 'Toast - 轻提示',
                        path: '/main/Toast'
                    },
                    {
                        name: 'Loading - 加载',
                        path: '/main/Loading'
                    },
                    {
                        name: 'Backtop - 返回顶部',
                        path: '/main/Backtop'
                    },
                    {
                        name: 'Notify - 消息通知',
                        path: '/main/Notify'
                    },
                    {
                        name: 'Dialog - 弹出框',
                        path: '/main/Dialog'
                    }
                ]
            }
        ]
    }
]