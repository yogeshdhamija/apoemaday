#!/bin/sh

printf "\033[0;32mStashing uncommitted changes...\033[0m\n"
current_timestamp=timestamp-$(date +%s) 
result_of_stash=$(git stash save $current_timestamp)
did_stash=$(echo $result_of_stash|grep $current_timestamp)
if [ "$did_stash" ]; then 
	printf "$did_stash\n"
else
	printf "Nothing stashed.\n"
fi

printf "\033[0;32mClearing 'public' folder...\033[0m\n"
rm -rf public/*

printf "\033[0;32mBuilding into 'public' folder...\033[0m\n"
hugo # if using a theme, replace with `hugo -t <YOURTHEME>`

cd public

printf "\033[0;32mGit-Committing the change to the repo in the 'public' folder...\033[0m\n"
git add .
msg="rebuilding site $(date)"
if [ -n "$*" ]; then
	msg="$*"
fi
git commit --allow-empty -m "$msg"

printf "\033[0;32mPushing...\033[0m\n"
git push origin HEAD:master --force

printf "\033[0;32mUpdating this repo...\033[0m\n"
cd ..
git submodule update --remote --recursive -- public
git add public
git commit -m "deploy"

if [ "$did_stash" ]; then 
	printf "\033[0;32mGetting your stashed changes back...\033[0m\n"
	git stash pop
fi