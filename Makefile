all:
	git add .
	git status # Lists all new or modified files to be committed
	git commit -m "Second commit"
	git push -u origin master