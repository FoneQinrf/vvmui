/*
 * @Author: Fone丶峰
 * @Date: 2019-12-23 15:34:02
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 09:48:55
 * @Description: 
 * @Email: qinrifeng@163.com
 */

'use strict'
const path = require('path')
const fs = require('fs')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const packageConfig = require('../package.json')
const glob = require('glob');
const writeFile = require('./writeFile.config.js')
const configPath = path.join(__dirname + '/..')

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory

  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS ? [cssLoader, postcssLoader] : [cssLoader]

    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)

  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }

  return output
}

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

/**
 * 增加 hljs 的 classname
 */
exports.wrapCustomClass = function (render) {
  return function (...args) {
    return render(...args)
      .replace('<code class="', '<code class="hljs ')
      .replace('<code>', '<code class="hljs">')
  }
}

/**
 * Format HTML string
 */
exports.convertHtml = function (str) {
  return str.replace(/(&#x)(\w{4});/gi, $0 => String.fromCharCode(parseInt(encodeURIComponent($0).replace(/(%26%23x)(\w{4})(%3B)/g, '$2'), 16)))
}

exports.entries = function () {
  if (!config.gulpConfig.watchRouter) {
    return
  }
  const pages = path.resolve(configPath + '/src/', 'views')
  const mdPage = glob.sync(pages + '/main/**/index.md', { nodir: false })
  let main = []
  mdPage.forEach(element => {
    const name = element.match(/\/main\/(\S*)\/index.md/)[1]
    const str = `{path: '${name}',name: 'main-${name}', meta: {title: '${config.name}-${name}'},component: () => import('@/views${element.match(/src\/views(\S*)/)[1]}')}`
    main.push(str)
  });
  const string = writeFile.routerConfigString(main)
  const writePath = `${configPath}/src/router/index.js`;
  fs.writeFileSync(writePath, string);
}

exports.mobileDemo = function () {
  const pages = path.resolve(configPath + '/src/', 'views')
  const vuePage = glob.sync(pages + '/mobile/**/index.vue', { nodir: false })
  let mobile = []
  vuePage.forEach(element => {
    const name = element.match(/\/mobile\/(\S*)\/index.vue/)[1]
    const str = `{path: "${name}",name: "mobile-${name}", meta: {title: "${config.name}-${name}"},component: () => import("@/views${element.match(/src\/views(\S*)/)[1]}")}`
    mobile.push(str)
  });
  const string = writeFile.mobile(mobile)
  const writePath = `${configPath}/src/router/mobile.js`;
  fs.writeFileSync(writePath, string);
}

exports.packagesWatch = function () {
  const { component, gulpConfig } = config
  if (!gulpConfig.watchComponents) {
    return
  }
  const pages = path.resolve(configPath + '/packages/')
  const list = glob.sync(pages + '/components/*/index.js', { nodir: false })
  let array = []
  let createApiArray = []
  let templateApiArray = []
  list.forEach(element => {
    const name = element.match(/\/components\/(\S*)\/index/)[1]
    if (name.indexOf(component.createApi) != -1) {
      createApiArray.push(name.replace(component.createApi, ""))
    } else if (name.indexOf(component.templateApi) != -1) {
      templateApiArray.push(name.replace(component.templateApi, ""))
    } else {
      array.push(name)
    }
  });
  const string = writeFile.packagesWriteFile(array, templateApiArray, createApiArray)
  const writePath = `${configPath}/packages/index.js`;
  fs.writeFileSync(writePath, string);
}

exports.packagesWatchStyle = function () {
  const pages = path.resolve(configPath + '/packages/')
  var style = glob.sync(pages + '/assets/**/*.{less,css}', { nodir: false })
  var componentStyle = glob.sync(pages + '/components/**/*.{less,css}', { nodir: false })
  const file = style.concat(componentStyle)
  const string = writeFile.styleWriteFile(file)
  const writePath = `${configPath}/packages/style.less`;
  fs.writeFileSync(writePath, string);
}

exports.packagesJson = function () {
  const { component } = config
  const pages = path.resolve(configPath + '/packages/')
  const array = glob.sync(pages + '/components/**/index.js', { nodir: false })
  let options = {}
  array.forEach(element => {
    const name = element.match(/\/components\/(\S*)\/index/)[1].replace(component.createApi, "").replace(component.templateApi, "")
    const path = `./packages${element.match(/packages(\S*)/)[1]}`
    options[name] = path
  });
  const string = JSON.stringify(options)
  const writePath = `${configPath}/components.json`;
  fs.writeFileSync(writePath, string);
}