/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 15:31:24
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-09-30 15:22:06
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');
const utils = require('./utils')


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const entry = {
    'style.less': './packages/style.less'
}

module.exports = {
    devtool: 'source-map',
    entry: entry,
    output: {
        path: path.resolve(__dirname, '../lib'),
        filename: '[name]'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: (getPath) => {
                return getPath('[name]').replace('less', 'less');
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
            '#': resolve('')
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
            {
                test: /\.(css|less)$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: "css-loader"
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
            }
        ]
    }
}