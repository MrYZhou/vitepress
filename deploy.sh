#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd web_docs/.vitepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
#git push -f git@github.com:MrYZhou/MrYZhou.github.io.git master
git push -f git@gitee.com:MrYZhou/MrYZhou.github.io.git master
#git@gitee.com:lgpr/vitepress.git

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
# git push -f git@gitee.com:lgpr/vitepress.git develop:develop

cd -