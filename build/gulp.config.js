/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:25
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 09:48:39
 * @Description: 
 * @Email: qinrifeng@163.com
 */

const { watch, task, parallel } = require('gulp')
const { entries, mobileDemo, packagesWatch, packagesWatchStyle } = require('./utils.js')

/**
 * 路由watch
 */
const router = watch(['../src/views/main/**/index.md'])
router.on('add', function () {
    entries()
})
router.on('unlink', function () {
    entries()
})
router.on('change', function () {
    entries()
});

/**
 * mobile demo组件watch
 */
const mobile = watch(['../src/views/mobile/**/index.vue']);
mobile.on('add', function () {
    mobileDemo()
})
mobile.on('unlink', function () {
    mobileDemo()
})
mobile.on('change', function () {
    mobileDemo()
});



const packages = watch(['../packages/components/**/*.js']);
packages.on('add', function () {
    packagesWatch()
})
packages.on('unlink', function () {
    packagesWatch()
})
packages.on('change', function () {
    packagesWatch()
});

const packagesStyle = watch(['../packages/components/**/*.less', '../packages/assets/**/*.less', , '../packages/assets/**/*.css']);
packagesStyle.on('add', function () {
    packagesWatch()
})
packagesStyle.on('unlink', function () {
    packagesWatch()
})
packagesStyle.on('change', function () {
    packagesWatch()
});

task('default', function () {
    entries()
    mobileDemo()
    packagesWatch()
    packagesWatchStyle()
})