###
 # @Author: Fone丶峰
 # @Date: 2020-03-27 15:33:28
 # @LastEditors: Fone丶峰
 # @LastEditTime: 2020-03-27 15:43:19
 # @Description: 
 # @Email: qinrifeng@163.com
 ###
set -e

npm run build

cd dist

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:FoneQinrf/am-ui.git master:gh-pages

cd -