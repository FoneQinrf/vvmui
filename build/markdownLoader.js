/*
 * @Author: Fone丶峰
 * @Date: 2020-04-09 11:49:53
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-23 15:03:22
 * @Description: msg
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
 */
const markdown = require('markdown-it')
const hljs = require('highlight.js');

module.exports = function (src) {
    const md = markdown({
        html: true,
        langPrefix: 'language-',
        typographer: true,
        quotes: '{{}}',
        highlight: function (str, lang) {
            //console.log(hljs.highlight(lang, str, true).value)
            if (lang && hljs.getLanguage(lang)) {
                try {
                    return `<pre class="hljs" style="background: #f2f2f4"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
                } catch (__) { }
            }

            return `<pre class="hljs" style="background: #f2f2f4"><code>${md.utils.escapeHtml(str)}</code></pre>`;
        }
    }).use(require('markdown-it-mark')).use(require('markdown-it-ins')).use(require('markdown-it-footnote')).use(require('markdown-it-deflist')).use(require('markdown-it-abbr'))
    //markdown-it-sup markdown-it-footnote markdown-it-deflist markdown-it-abbr markdown-it-ins markdown-it-mark
    const html = md.render(src)
    return (
        `<template>\n` +
        `<div>${html}</div>\n` +
        `</template>\n`
    )
}