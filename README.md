# Particl.io

> Don't edit files in `_site/` directory directly! Those files are automatically generated. Any changes manually edited there will be overwritten. Edit `.md` files in root dir or corresponding files in `_layouts` and `_includes` directories depending on your change.


## Info

* use `gulp`!
    - don't edit `app.css` CSS directly! edit files in `scss/` instead
    - don't edit `all.js` => add/edit files in `js/src/` (if you're adding new files, you'll have to add them also in `gulpfile.js` in `gulp.task('scripts')` section)


## Contribute

1. clone the repo
2. install `node` and `yarn`/`npm` if you don't have them already
3. `yarn install`/`npm install` to fetch dependencies
4. `gulp watch` for:
    - Sass => CSS autocompiling when changed
    - concat/minify & uglify JS
    - start local BrowserSync server with realtime reloading
5. or just `gulp watch-sass` for styles only


## TODO

* Tweaks
    - [ ] self-hosted Piwik analytics?
    - [ ] add "particl in press" link
        - [ ] /press - list of articles about PART (+ update it)
    - [x] roadmap: add completed items from https://particl.wiki/_media/images/particltimeline-01.png
