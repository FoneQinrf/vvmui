
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
              children: [{path: "Backtop",name: "mobile-Backtop", meta: {title: "G-UI-Backtop"},component: () => import("@/views/mobile/Backtop/index.vue")},{path: "Button",name: "mobile-Button", meta: {title: "G-UI-Button"},component: () => import("@/views/mobile/Button/index.vue")},{path: "Calendar",name: "mobile-Calendar", meta: {title: "G-UI-Calendar"},component: () => import("@/views/mobile/Calendar/index.vue")},{path: "Cell",name: "mobile-Cell", meta: {title: "G-UI-Cell"},component: () => import("@/views/mobile/Cell/index.vue")},{path: "Checkbox",name: "mobile-Checkbox", meta: {title: "G-UI-Checkbox"},component: () => import("@/views/mobile/Checkbox/index.vue")},{path: "From",name: "mobile-From", meta: {title: "G-UI-From"},component: () => import("@/views/mobile/From/index.vue")},{path: "Icon",name: "mobile-Icon", meta: {title: "G-UI-Icon"},component: () => import("@/views/mobile/Icon/index.vue")},{path: "Input",name: "mobile-Input", meta: {title: "G-UI-Input"},component: () => import("@/views/mobile/Input/index.vue")},{path: "Loading",name: "mobile-Loading", meta: {title: "G-UI-Loading"},component: () => import("@/views/mobile/Loading/index.vue")},{path: "main",name: "mobile-main", meta: {title: "G-UI-main"},component: () => import("@/views/mobile/main/index.vue")},{path: "NumberInput",name: "mobile-NumberInput", meta: {title: "G-UI-NumberInput"},component: () => import("@/views/mobile/NumberInput/index.vue")},{path: "Picker",name: "mobile-Picker", meta: {title: "G-UI-Picker"},component: () => import("@/views/mobile/Picker/index.vue")},{path: "Radio",name: "mobile-Radio", meta: {title: "G-UI-Radio"},component: () => import("@/views/mobile/Radio/index.vue")},{path: "Toast",name: "mobile-Toast", meta: {title: "G-UI-Toast"},component: () => import("@/views/mobile/Toast/index.vue")},{path: "Upload",name: "mobile-Upload", meta: {title: "G-UI-Upload"},component: () => import("@/views/mobile/Upload/index.vue")}]
            }
        ]
    })
    
    router.afterEach((to) => {
        if (to.meta.title) {
            document.title = to.meta.title
        }
    });
    
    export default router
    