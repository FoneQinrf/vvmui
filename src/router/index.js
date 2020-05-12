
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: '*',
        name: 'home',
        //component: () => import('@/views/home.vue')
        redirect: '/main/introduce'
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/views/main/layout.vue'),
        children: [{path: 'ActionSheet',name: 'main-ActionSheet', meta: {title: 'vvmui-ActionSheet'},component: () => import('@/views/main/ActionSheet/index.md')},{path: 'Backtop',name: 'main-Backtop', meta: {title: 'vvmui-Backtop'},component: () => import('@/views/main/Backtop/index.md')},{path: 'Button',name: 'main-Button', meta: {title: 'vvmui-Button'},component: () => import('@/views/main/Button/index.md')},{path: 'Calendar',name: 'main-Calendar', meta: {title: 'vvmui-Calendar'},component: () => import('@/views/main/Calendar/index.md')},{path: 'Card',name: 'main-Card', meta: {title: 'vvmui-Card'},component: () => import('@/views/main/Card/index.md')},{path: 'Cell',name: 'main-Cell', meta: {title: 'vvmui-Cell'},component: () => import('@/views/main/Cell/index.md')},{path: 'Checkbox',name: 'main-Checkbox', meta: {title: 'vvmui-Checkbox'},component: () => import('@/views/main/Checkbox/index.md')},{path: 'Collapse',name: 'main-Collapse', meta: {title: 'vvmui-Collapse'},component: () => import('@/views/main/Collapse/index.md')},{path: 'DatetimePicker',name: 'main-DatetimePicker', meta: {title: 'vvmui-DatetimePicker'},component: () => import('@/views/main/DatetimePicker/index.md')},{path: 'Dialog',name: 'main-Dialog', meta: {title: 'vvmui-Dialog'},component: () => import('@/views/main/Dialog/index.md')},{path: 'From',name: 'main-From', meta: {title: 'vvmui-From'},component: () => import('@/views/main/From/index.md')},{path: 'Icon',name: 'main-Icon', meta: {title: 'vvmui-Icon'},component: () => import('@/views/main/Icon/index.md')},{path: 'Image',name: 'main-Image', meta: {title: 'vvmui-Image'},component: () => import('@/views/main/Image/index.md')},{path: 'Input',name: 'main-Input', meta: {title: 'vvmui-Input'},component: () => import('@/views/main/Input/index.md')},{path: 'introduce',name: 'main-introduce', meta: {title: 'vvmui-introduce'},component: () => import('@/views/main/introduce/index.md')},{path: 'Loading',name: 'main-Loading', meta: {title: 'vvmui-Loading'},component: () => import('@/views/main/Loading/index.md')},{path: 'Model',name: 'main-Model', meta: {title: 'vvmui-Model'},component: () => import('@/views/main/Model/index.md')},{path: 'Notify',name: 'main-Notify', meta: {title: 'vvmui-Notify'},component: () => import('@/views/main/Notify/index.md')},{path: 'NumberInput',name: 'main-NumberInput', meta: {title: 'vvmui-NumberInput'},component: () => import('@/views/main/NumberInput/index.md')},{path: 'Picker',name: 'main-Picker', meta: {title: 'vvmui-Picker'},component: () => import('@/views/main/Picker/index.md')},{path: 'quickstart',name: 'main-quickstart', meta: {title: 'vvmui-quickstart'},component: () => import('@/views/main/quickstart/index.md')},{path: 'Radio',name: 'main-Radio', meta: {title: 'vvmui-Radio'},component: () => import('@/views/main/Radio/index.md')},{path: 'style',name: 'main-style', meta: {title: 'vvmui-style'},component: () => import('@/views/main/style/index.md')},{path: 'Switch',name: 'main-Switch', meta: {title: 'vvmui-Switch'},component: () => import('@/views/main/Switch/index.md')},{path: 'Toast',name: 'main-Toast', meta: {title: 'vvmui-Toast'},component: () => import('@/views/main/Toast/index.md')},{path: 'updata',name: 'main-updata', meta: {title: 'vvmui-updata'},component: () => import('@/views/main/updata/index.md')},{path: 'Upload',name: 'main-Upload', meta: {title: 'vvmui-Upload'},component: () => import('@/views/main/Upload/index.md')}]
    }
]
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
});

export default router