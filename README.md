# Particl.io

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

* site works without JavaScript (newsletter sign-up suprisingly as well)
* site is mobile-first
* local links should have `scroll` class (for smooth scrolling); external `ext` class


## TODO

* Fixes
    - [ ] favicons
    - [ ] remove respo~ infobox (bottom right)
    - [x] pop-up or something for video

* Tweaks
    - [ ] illustrations to SVG
    - [ ] decently animate them
    - [ ] graphs for PART Token > Distribution

* [ ] "learn more" buttons to each section in mobile (toggle content)
* [ ] missing links in footer: FB, Careers
* [ ] convert it all to Jekyll (now it's just plain ol' HTML)
* [ ] Piwik/Analytics?

=> https://paper.dropbox.com/doc/PAR-38-Website-Design-Update-8ntIfvpLSudnVJYpmoJku