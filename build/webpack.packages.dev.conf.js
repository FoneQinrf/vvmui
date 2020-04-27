/*
 * @Author: Fone丶峰
 * @Date: 2019-10-22 11:32:25
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-26 17:37:45
 * @Description: 
 * @Email: qinrifeng@163.com
 */

const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const config = require('../config')
const utils = require('./utils')
const glob = require('glob');


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

function entries() {
    var jsDir = path.resolve(__dirname + '/../packages/', 'components')
    var entryFiles = glob.sync(jsDir + '/**/index.js', { nodir: false })
    var map = {};
    entryFiles.forEach(element => {
        const name = element.split("/packages/")[1].replace(config.component.createApi, "").replace(config.component.templateApi, "")
        map[name] = element
    });
    return map;
}

const createLintingRule = () => ({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: 'pre',
    include: [resolve('src'), resolve('test'), resolve('packages')],
    options: {
        formatter: require('eslint-friendly-formatter'),
        emitWarning: !config.dev.showEslintErrorsInOverlay
    }
})

entries()

const entry = {
    'style.css': './packages/style.less',
    'index.js': './packages/index.js'
}

module.exports = {
    devtool: 'source-map',
    entry: Object.assign(entries(), entry),
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    plugins: [
        new CleanWebpackPlugin(),
        /**new UglifyJsPlugin({
            parallel: true,
            sourceMap: true,
            uglifyOptions: {
                compress: {
                    warnings: false,
                    drop_debugger: true,
                    drop_console: true
                }
            }
        }),**/
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('[name]').replace('css', 'css');
            },
            allChunks: true
        }),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js|css|less)$/,
            threshold: 1024,
            minRatio: 0.8
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.less', '.json'],
        alias: {
            '#': resolve(''),
            '@': resolve('packages')
        }
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    module: {
        rules: [
            ...(config.dev.useEslint ? [createLintingRule()] : []),
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true //css压缩
                        }
                    }, {
                        loader: "less-loader"
                    }, {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            config: {
                                path: './config'
                            }
                        }
                    }
                    ]
                })
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('static/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    sourceMap: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}