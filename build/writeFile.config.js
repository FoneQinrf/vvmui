/*
 * @Author: Fone丶峰
 * @Date: 2019-08-02 20:36:45
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-27 18:19:55
 * @Description: 
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */
const { component } = require('../config')

module.exports = {
  mobile: (options) => {
    return `
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
              children: [${options}]
            }
        ]
    })
    
    router.afterEach((to) => {
        if (to.meta.title) {
            document.title = to.meta.title
        }
    });
    
    export default router
    `
  },
  routerConfigString: (main) => {
    return `
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
        children: [${main}]
    }
]
})

router.afterEach((to) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
});

export default router`
  },
  packagesWriteFile: (array, templateApiArray, createApiArray) => {
    let str = ``;
    let create = ``;
    const list = array.concat(templateApiArray)
    array.forEach(element => {
      str += `import ${element} from "./components/${element}";\n`
    });
    if (templateApiArray.length) {
      templateApiArray.forEach(element => {
        str += `import ${element} from "./components/${component.templateApi}${element}";\n`
      });
    }
    if (createApiArray.length) {
      createApiArray.forEach(element => {
        str += `import ${element} from "./components/${component.createApi}${element}";\n`
        create += `Vue.prototype.$${element} = ${element};\n`
      });
    }
    return `${str} 

const components = [${list}]

const install = function (Vue) {
      if (install.installed) return;
      components.map(component => Vue.component(component.name, component))
      ${create}
};
      
// auto install
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(components)
}
      
export default install
    `
  },
  styleWriteFile: (array) => {
    let str = ``
    array.forEach(element => {
      str += `@import ".${element.match(/packages(\S*)/)[1]}";\n`
    });
    return str
  }
}