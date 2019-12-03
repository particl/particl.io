/*! particl.io v2.0 | Author: Martin Allien <martin@particl.io> */

/*
  GULP TAKS OVERVIEW
  ----
  * gulp - continuous compilation of SCSS, JS etc. + starts local server with live refresh (browser code injecting)
*/

'use strict';

/* ------------------------------------ *\
    Modules
\* ------------------------------------ */

// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');
// Importing all the Gulp-related packages we want to use
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const svgmin = require('gulp-svgmin');
const iconfont = require('gulp-iconfont');
const iconfontCss = require('gulp-iconfont-css');


/* ------------------------------------ *\
    Variables etc.
\* ------------------------------------ */

sass.compiler = require('node-sass');

const server = browserSync.create();
const fontName = 'icons';

const paths = {
  template: [
    './**/*.html',
    './**/*.md'
  ],
  // CSS
  scss: './_sass/*.scss',
  css: './assets/css',
  styles: {
    input: './_sass/*.scss',
    output: './assets/css'
  },
  // JS
  scripts: {
    folder: './assets/js/src/',
    input: './assets/js/src/*.js',
    output: './assets/js',
  },
  js: './assets/js/src/',
  js_in: './assets/js/src/*.js',
  js_out: './assets/js',
  // iconfont
  ico_input: './assets/img/icons/**/*.svg',
  ico_output: './assets/img/icons/',
  font_output: './assets/fonts/',
}


/* ------------------------------------ *\
    Tasks
    Gulp 3 => 4 guides:
      - https://www.goede.site/setting-up-gulp-4-for-automatic-sass-compilation-and-css-injection
      - https://www.joezimjs.com/javascript/complete-guide-upgrading-gulp-4/
      - https://coder-coder.com/gulp-4-walk-through/
      - https://github.com/gulpjs/gulp/blob/master/docs/recipes/minimal-browsersync-setup-with-gulp4.md
\* ------------------------------------ */

function styles(){
  return (
    src(paths.styles.input)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({cascade: false}))
    .pipe(sourcemaps.write(''))
    .pipe(dest(paths.styles.output))
    .pipe(browserSync.stream())
  );
}


function scripts(){
  return (
    src([
      paths.scripts.folder + 'jquery-1.11.2.min.js',
      paths.scripts.folder + 'modernizr.min.js',
      paths.scripts.folder + 'owl.carousel.min.js',
      paths.scripts.folder + 'jquery.countdown.min.js', // http://hilios.github.io/jQuery.countdown/
      paths.scripts.folder + 'moment.min.js', // countdown-related
      paths.scripts.folder + 'moment-timezone-with-data-2012-2022.min.js', // countdown-related
      paths.scripts.folder + 'jquery.magnific-popup.min.js', // pop-ups
      paths.scripts.folder + 'aos.js', // AnimateOnScroll
      paths.scripts.folder + 'particl.js',
    ])
    .pipe(sourcemaps.init())
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write(''))
    .pipe(dest(paths.scripts.output))
    .pipe(browserSync.stream())
  );
}

function icons(){
  return src([paths.ico_input])
    .pipe(svgmin())
    .pipe(dest(paths.ico_output))
    .pipe(iconfontCss({
      fontName: fontName,
      fontPath: '/assets/fonts/',
      targetPath: '../../_sass/_icons.scss',
      cssClass: 'ico'
    }))
    .pipe(iconfont({
      fontName: fontName,
      prependUnicode: true,
      formats: ['ttf', 'eot', 'woff', 'woff2'],
      normalize: true,
      fontHeight: 1001,
      descent: 140
    }))
    .pipe(dest(paths.font_output))
    .pipe(browserSync.stream())
  ;
}

// BrowserSync - start server
function serve(done) {
  server.init({
    server: {
      baseDir: '_site/',
      index: 'index.html'
    }
  });
  done();
}


// BrowserSync - reload page
function reload(done) {
  server.reload();
  done();
}



function watcher() {
  watch(paths.styles.input, styles);
  watch(paths.scripts.input, scripts);
  watch(paths.template, reload);
}


// Default task
exports.default = series( parallel( styles, scripts, serve ), watcher );
exports.webfont = series( icons );