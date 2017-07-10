# Particl.io

## TODO

* [ ] decently animate illustrations (?)
* [ ] "learn more" buttons to each section in mobile (toggle content)
* [ ] favicons
* [ ] graphs for PART Token > Distribution
* [~] missing links in footer: FB, Careers, FAQ, Terms

=> https://paper.dropbox.com/doc/PAR-38-Website-Design-Update-8ntIfvpLSudnVJYpmoJku


## Info

* use `gulp`!
    - don't edit `app.css` CSS directly! edit files in `scss/` instead
    - don't edit `all.js` => add/edit files in `js/src/` (if you're adding new files, you'll have to add them also in `gulpfile.js` in `gulp.task('scripts')` section)


## Contribute

1. clone the repo
2. install `node` and `npm` if you don't have them already
3. `npm install` to fetch dependencies
4. `gulp watch` for:
    - Sass => CSS autocompiling when changed
    - concat/minify & uglify JS
    - start local BrowserSync server with realtime reloading


### FYI

* site is mobile-first
* works without JS => final checks
* local links should have `scroll` class (for smooth scrolling); external `ext` class