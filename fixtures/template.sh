# Shell Example
cd ~/dev/atom-snazzy-clear-syntax/

# Until this is fixed, some commands won't be highlighted
# https://github.com/atom/language-shellscript/issues/59
ls -a | grep "package.json" | xargs cat

echo "pending" >> /dev/null
