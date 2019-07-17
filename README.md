# Particl.io

Jekyll-based website for private cryptocurrency project [Particl.io](https://particl.io). Hosted here on GitHub Pages, maintained by [@AllienWorks](https://github.com/allienworks).

## Editing content (`html`, `md` files)

**Don't edit files in `_site/` directory directly!** Those files are automatically generated. Any changes manually edited there will be overwritten. Edit `.md` files in root dir or corresponding files in `_layouts` and `_includes` directories depending on your change.

## Editing styles & scripts

Again, **don't edit `app.css` and `all.js` files directly – use `gulp`!**
  - **Styles:** edit files in `scss/` folder
  - **Scripts:** add/edit files in `js/src/` (if you're adding new files, you'll have to add them also in `gulpfile.js` in `gulp.task('scripts')` section)

After you've done the changes, run `gulp` to compile all styles & scripts (more on that below).

## Proper contributing flow for submitting changes

1. clone/fork the repo
2. create a new branch for your changes (e.g. `page/new-page` or `bugfix/missing-stuff`)
3. install `node` and `yarn` (or `npm`) if you don't have them already
4. fetch project dependencies:
```
$ yarn install
```
5. serve Jekyll site on localhost (this will make the site available on http://127.0.0.1:4000/):
```
$ bundle exec jekyll serve
```
6. for "live" development (when working on CSS/JS), use Gulp for live reload, style/script compilation etc.:
```
$ gulp watch
```
Alternatively, you can use `$ gulp` for a one-time compilation.

7. make your changes & commit
8. push and open a PR, feel free to mention [@AllienWorks](https://github.com/allienworks) for review

## Complex layout & responsive design

This site is built on [BRICKst](https://github.com/allienworks/brickst) (custom minimal "framework") and is following **mobile-first approach** to responsive web design. That means that all styles are written for smallest screens by default and then progressively tweaked to larger viewport widths via responsive media querries (~ BRICKst mixins) – see example below.

When working on layout, you can help yourself by enabling `$debug: true` in `_sass/_config.scss:3`, which will display a small helper in the bottom right corner with current screen size. You can then use that in your SCSS mixins.

Putting this all together, your styles should look somehow like this:

```
.class {
  font-size: 16px;
  @include break(m) { font-size: 17px; }
  @include break(l) { font-size: 18px; }
}
```

See `_sass/_config.scss` for all the available sizes and `_sass/_mixings.scss` for all available mixins.
