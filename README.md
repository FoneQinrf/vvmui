<!--
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-08 15:39:35
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-21 15:42:19
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 -->

# 目录结构描述

```
├─build                               打包服务
│   build.gulp.js                     最终gulp打包用
│   build.js
│   check-versions.js                 
│   gulp.config.js                    开发时gulp监听服务                  
│   strip-dom.js
│   utils.js
│   vue-loader.conf.js
│   webpack.base.conf.js
│   webpack.dev.conf.js
│   webpack.packages.dev.conf.js      组件打包配置
│   webpack.prod.conf.js
│   writeFile.config.js
├─config
│  │ dev.env.js
│  │ index.js
│  │ postcss.config.js                组件样式打包postcss规则
│  │ prod.env.js
│  │ test.env.js
├─lib                                 组件打包放置文件夹
├─packages                            组件开发目录
│  │  index.js                        所有组件入口
│  │  style.less                      样式入口
│  ├─assets                
│  │  └─style                         通用样式目录
│  └─components                       组件放置目录
├─src                                 example目录
│  │  App.vue
│  │  main.js
│  ├─assets
│  ├─components
│  ├─router
│  ├─utils
│  └─views
│      │  home.vue
│      ├─main                         PC端路由组件目录 以.md为主
│      └─mobile                       移动端路由组件目录 以.vue为主
│
├─static
├─test
├─.babelrc
├─.editorconfig
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─.postcssrc.js
├─index.html
├─package.json
├─components.json                        所有可按需加载组件（给使用者看）
└─README.md
```

# main和mobile文件夹规则

```
views/main/Input/index.md     会生成路径为/main/Input的路由

views/mobile/Input/index.vue  会生成路径为/mobile/Input的路由

注：只有为index.md或者index.vue的文件才会生成路由，如遇路由未生成可重启项目
```

# 核心配置说明

```
├─config
│  │ index.js                   
│  │ postcss.config.js        组件打包样式配置

index.js  关键配置字段
    name: 'G-UI',              //组件库名称
    component: {
        templateApi: '_',      //模板注册和createApi调用共存的组件命名前缀
        createApi: '~'         //createApi调用组件命名前缀
    },
    gulpConfig: {
        watchRouter: true,      //是否自动生成路由    路由不符合当前约定的情况可用 （需要手动配置路由）
        watchComponents: true   //是否自动生成组件入口 生成入口文件过于复杂不符合当前情况下可用 （需手动配置组件打包入口）
    }
```

# 开发说明

开发时引用packages/index.js、lib/style.css即可
```
├─packages                            
│  │  index.js  
│  │  style.less   
```
网站侧边导航配置
```
├─utils                           
│  │  navList.js   
```

# 相关命令
```
yarn serve  开发模式
yarn build:package  单独打包组件内部资源
# 生成lib示例
│  G-UI.js
│  G-UI.js.gz
│  G-UI.js.map
│  style.css
│  style.css.map
│
└─components
    ├─Button
    │      index.js
    │      index.js.gz
    │      index.js.map
    │
    ├─Input
    │      index.js
    │      index.js.gz
    │      index.js.map
    │
    └─Toast
            index.js
            index.js.map



yarn build  用于发布应用命令
```

# 使用者按需加载说明
```
# 安装 babel-plugin-import 插件
npm i babel-plugin-import -D   或 yarn add babel-plugin-import   


// 在.babelrc中添加插件配置
{
  "plugins": [
    ["import", {
      "libraryName": "name",       UI库文件夹名称
      "libraryDirectory": "lib/components"
    }]
  ]
}

```