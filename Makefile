all:
	git add .
	git status 
	if ! git diff --cached --quiet; then \
		git commit -m "Second commit"; \
		git push -u origin; \
	else \
		echo "Nothing to commit, skipping push."; \
	fi
	echo "Done"
