
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import('@/views/main/layout.vue'),
        children: [{path: 'Backtop',name: 'main-Backtop', meta: {title: 'G-UI-Backtop'},component: () => import('@/views/main/Backtop/index.md')},{path: 'Button',name: 'main-Button', meta: {title: 'G-UI-Button'},component: () => import('@/views/main/Button/index.md')},{path: 'Calendar',name: 'main-Calendar', meta: {title: 'G-UI-Calendar'},component: () => import('@/views/main/Calendar/index.md')},{path: 'Cell',name: 'main-Cell', meta: {title: 'G-UI-Cell'},component: () => import('@/views/main/Cell/index.md')},{path: 'Checkbox',name: 'main-Checkbox', meta: {title: 'G-UI-Checkbox'},component: () => import('@/views/main/Checkbox/index.md')},{path: 'From',name: 'main-From', meta: {title: 'G-UI-From'},component: () => import('@/views/main/From/index.md')},{path: 'Icon',name: 'main-Icon', meta: {title: 'G-UI-Icon'},component: () => import('@/views/main/Icon/index.md')},{path: 'Input',name: 'main-Input', meta: {title: 'G-UI-Input'},component: () => import('@/views/main/Input/index.md')},{path: 'introduce',name: 'main-introduce', meta: {title: 'G-UI-introduce'},component: () => import('@/views/main/introduce/index.md')},{path: 'Loading',name: 'main-Loading', meta: {title: 'G-UI-Loading'},component: () => import('@/views/main/Loading/index.md')},{path: 'NumberInput',name: 'main-NumberInput', meta: {title: 'G-UI-NumberInput'},component: () => import('@/views/main/NumberInput/index.md')},{path: 'Picker',name: 'main-Picker', meta: {title: 'G-UI-Picker'},component: () => import('@/views/main/Picker/index.md')},{path: 'quickstart',name: 'main-quickstart', meta: {title: 'G-UI-quickstart'},component: () => import('@/views/main/quickstart/index.md')},{path: 'Radio',name: 'main-Radio', meta: {title: 'G-UI-Radio'},component: () => import('@/views/main/Radio/index.md')},{path: 'Toast',name: 'main-Toast', meta: {title: 'G-UI-Toast'},component: () => import('@/views/main/Toast/index.md')},{path: 'updata',name: 'main-updata', meta: {title: 'G-UI-updata'},component: () => import('@/views/main/updata/index.md')},{path: 'Upload',name: 'main-Upload', meta: {title: 'G-UI-Upload'},component: () => import('@/views/main/Upload/index.md')}]
    }
]
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
});

export default router