
    import Vue from 'vue'
    import Router from 'vue-router'
    
    Vue.use(Router)
    
    const router = new Router({
        routes: [
            {
                path: '/',
                name: 'home',
                redirect: '/mobile/main'
            },
            {
              path: '/mobile',
              name: 'mobile',
              component: () => import('@/views/mobile/layout.vue'),
              children: [{path: "ActionSheet",name: "mobile-ActionSheet", meta: {title: "vvmui-ActionSheet"},component: () => import("@/views/mobile/ActionSheet/index.vue")},{path: "Backtop",name: "mobile-Backtop", meta: {title: "vvmui-Backtop"},component: () => import("@/views/mobile/Backtop/index.vue")},{path: "Button",name: "mobile-Button", meta: {title: "vvmui-Button"},component: () => import("@/views/mobile/Button/index.vue")},{path: "Calendar",name: "mobile-Calendar", meta: {title: "vvmui-Calendar"},component: () => import("@/views/mobile/Calendar/index.vue")},{path: "Card",name: "mobile-Card", meta: {title: "vvmui-Card"},component: () => import("@/views/mobile/Card/index.vue")},{path: "Cell",name: "mobile-Cell", meta: {title: "vvmui-Cell"},component: () => import("@/views/mobile/Cell/index.vue")},{path: "Checkbox",name: "mobile-Checkbox", meta: {title: "vvmui-Checkbox"},component: () => import("@/views/mobile/Checkbox/index.vue")},{path: "DatetimePicker",name: "mobile-DatetimePicker", meta: {title: "vvmui-DatetimePicker"},component: () => import("@/views/mobile/DatetimePicker/index.vue")},{path: "From",name: "mobile-From", meta: {title: "vvmui-From"},component: () => import("@/views/mobile/From/index.vue")},{path: "Icon",name: "mobile-Icon", meta: {title: "vvmui-Icon"},component: () => import("@/views/mobile/Icon/index.vue")},{path: "Image",name: "mobile-Image", meta: {title: "vvmui-Image"},component: () => import("@/views/mobile/Image/index.vue")},{path: "Input",name: "mobile-Input", meta: {title: "vvmui-Input"},component: () => import("@/views/mobile/Input/index.vue")},{path: "Loading",name: "mobile-Loading", meta: {title: "vvmui-Loading"},component: () => import("@/views/mobile/Loading/index.vue")},{path: "main",name: "mobile-main", meta: {title: "vvmui-main"},component: () => import("@/views/mobile/main/index.vue")},{path: "Notify",name: "mobile-Notify", meta: {title: "vvmui-Notify"},component: () => import("@/views/mobile/Notify/index.vue")},{path: "NumberInput",name: "mobile-NumberInput", meta: {title: "vvmui-NumberInput"},component: () => import("@/views/mobile/NumberInput/index.vue")},{path: "Picker",name: "mobile-Picker", meta: {title: "vvmui-Picker"},component: () => import("@/views/mobile/Picker/index.vue")},{path: "Radio",name: "mobile-Radio", meta: {title: "vvmui-Radio"},component: () => import("@/views/mobile/Radio/index.vue")},{path: "Switch",name: "mobile-Switch", meta: {title: "vvmui-Switch"},component: () => import("@/views/mobile/Switch/index.vue")},{path: "Toast",name: "mobile-Toast", meta: {title: "vvmui-Toast"},component: () => import("@/views/mobile/Toast/index.vue")},{path: "Upload",name: "mobile-Upload", meta: {title: "vvmui-Upload"},component: () => import("@/views/mobile/Upload/index.vue")}]
            }
        ]
    })
    
    router.afterEach((to) => {
        if (to.meta.title) {
            document.title = to.meta.title
        }
    });
    
    export default router
    