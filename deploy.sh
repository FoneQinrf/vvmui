###
 # @Author: Fone丶峰
 # @Date: 2020-03-27 17:06:12
 # @LastEditors: Fone丶峰
 # @LastEditTime: 2020-03-27 17:07:10
 # @Description: 
 # @Email: qinrifeng@163.com
 ###
# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'am-ui'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:FoneQinrf/am-ui.git master:gh-pages

cd -