cd dist
git init
git checkout --orphan gh-pages
git add .
git commit -m "init project"
git remote add origin git@github.com:rodchen-king/ant-design-pro-v5.git
git push origin gh-pages