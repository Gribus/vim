#!/bin/bash
cd ~/vim
cp ~/.vimrc ~/vim/
cp ~/.zshrc ~/vim/
cp ~/.vim/bundle/vim-snippets/snippets/javascript/javascript.snippets ~/vim/
cp ~/.config/ranger/rc.conf ~/vim/
cp ~/.config/ranger/rifle.conf ~/vim/
git add .vimrc
git add .zshrc
git add javascript.snippets
git commit -m "Update vim"
git push

