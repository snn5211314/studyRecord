#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn build

# 进入生成的文件夹
cd blog

git init
git add -A
git commit -m '初始化数据，同步'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:snn5211314/vuepress.git master:gh-pages
# 推送到远端
git push -f git@121.40.18.180:/home/www/website/vuepress/blog.git master

cd -