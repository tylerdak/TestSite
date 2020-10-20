This is the repository for my personal site.

As a personal note to myself, here's what to do before updating this site:
- Use `bundle exec jekyll serve` to get constant updates to http://localhost:4000/
    - Great for development!
- Update version number in _layouts/default.html
- When ready to deploy, stop the server and use `bundle exec jekyll build` to get the public version ready
- `cd` into `./_site`
- Use `git` to:
    - Add all changes made (`git add *` unless you've become a slob)
    - Commit changes with message
    - Push to repo
- Wait...
- Profit
