/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-05 09:35:58
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-07 09:45:36
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
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