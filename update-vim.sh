#!/bin/bash
cd ~/vim
cp ~/.vimrc ~/vim/
cp ~/.zshrc ~/vim/
git add .vimrc
git add .zshrc
git commit -m "Update vim"
git push

