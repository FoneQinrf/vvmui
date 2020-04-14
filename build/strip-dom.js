/*
 * @Author: Fone丶峰
 * @Date: 2019-08-09 10:31:35
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-04-08 09:48:48
 * @Description: 
 * @Email: qinrifeng@163.com
 */

const cheerio = require('cheerio')

module.exports = (str, tags) => {
  const $ = cheerio.load(str, { decodeEntities: false })

  if (!tags || tags.length === 0) {
    return str
  }

  tags = !Array.isArray(tags) ? [tags] : tags
  let len = tags.length

  while (len--) {
    $(tags[len]).remove()
  }

  return $.html()
}