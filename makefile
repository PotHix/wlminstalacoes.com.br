rebuild: clean build

build:
	@echo "Building"
	@bundle exec middleman build
	@echo "Done!"

clean:
	@echo "Cleaning up"
	@rm -rf build

publish: build
	@echo "Publishing"
	@git log --oneline | head -n1 | sed -r 's/^[a-zA-Z0-9]+ //g' > build/last_commit
	@git checkout gh-pages
	@git pull --rebase
	@rm -rf humans.txt  images  index.html	javascripts  robots.txt  servicos  sitemap.txt	stylesheets
	@mv build/* .
	@git add -A .
	@git commit -m "Last commit from source branch: '`cat last_commit`'"
	@rm -rf build last_commit
	@git push
	@git checkout master
	@echo "Done!"
