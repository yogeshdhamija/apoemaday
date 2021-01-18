rm -rf docs

hugo -d docs --minify

printf "apoemaday.page" > docs/CNAME