#!/usr/bin/env sh

# https://vuepress.vuejs.org/guide/deploy.html#github-pages

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f https://${GITHUB_TOKEN}@github.com/HuangXiZhou/former.git master:gh-pages

cd -
