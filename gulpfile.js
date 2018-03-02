/*! particl.io v1.0 | Author: Martin Allien <martin@particl.io> */

/*
  GULP TAKS OVERVIEW
  ----
  * gulp - one-time compilation of everything
  * gulp watch - continuous compilation of SCSS, JS etc. + starts local server with live refresh (browser code injecting)
*/

'use strict';

/* ------------------------------------ *\
    Includes
\* ------------------------------------ */

var gulp = require('gulp');
// Pump - https://github.com/mafintosh/pump
var pump = require('pump');
// Sass autocompile - https://github.com/dlmanning/gulp-sass
var sass = require('gulp-sass');
// CSS Autoprefixer - https://github.com/sindresorhus/gulp-autoprefixer
var autoprefixer = require('gulp-autoprefixer');
// Concat ("merge JS") - https://github.com/contra/gulp-concat 
var concat = require('gulp-concat');
// JS Uglyfy - https://www.npmjs.com/package/gulp-uglify
var uglify = require('gulp-uglify');
// BrowserSync - https://www.browsersync.io
var browserSync = require('browser-sync').create();
// Sourcemaps - https://github.com/gulp-sourcemaps/gulp-sourcemaps
var sourcemaps = require('gulp-sourcemaps');
// SVGO - https://www.npmjs.com/package/gulp-svgmin
var svgmin = require('gulp-svgmin');
// Iconfont - https://github.com/nfroidure/gulp-iconfont
var iconfont = require('gulp-iconfont');
// Iconfont CSS - https://github.com/backflip/gulp-iconfont-css
var iconfontCss = require('gulp-iconfont-css');

var cp = require('child_process');


/* ------------------------------------ *\
    Variables
\* ------------------------------------ */

var fontName = 'particl-icons';

var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

/* ------------------------------------ *\
    Paths
\* ------------------------------------ */

const paths = {
  template: '*.html',
  // CSS
  //scss: 'scss/**/*.scss',
  scss: './_sass/**/*.scss',
  //css: 'css',
  css: './assets/css',
  // JS
  js: './assets/js/src/',
  js_in: './assets/js/src/*.js',
  js_out: './assets/js',
  // iconfont
  ico_input: 'img/ico/**/*.svg',
  ico_output: 'img/ico/',
  font_output: 'fonts/',
}


/* ------------------------------------ *\
    Tasks
\* ------------------------------------ */

// Compile Sass to CSS (and minify) + feed updates to BrowserSync
gulp.task('sass', function (cb) {
  pump([
    gulp.src('./_sass/particl-io.scss'),
    sourcemaps.init(),
    sass({outputStyle: 'compressed'}).on('error', sass.logError),
    autoprefixer({
      browsers: ['> 0.01%'], // https://github.com/ai/browserslist#queries
      cascade: false
    }),
    sourcemaps.write(''),
    gulp.dest(paths.css),
    gulp.dest('./_site/assets/css'),
    browserSync.reload({
      stream: true
    }),
  ], cb );
});




// Concatenate JavaScript and uglify
gulp.task('scripts', function (cb) {
  pump([
    gulp.src([
      paths.js + 'jquery-1.11.2.min.js',
      paths.js + 'modernizr.min.js',
      paths.js + 'owl.carousel.min.js',
      paths.js + 'particl.js',
    ]),
    sourcemaps.init(),
    concat('all.js'),
    uglify(),
    sourcemaps.write(''),
    gulp.dest(paths.js_out),
    gulp.dest('./_site/assets/js'),
    browserSync.reload({
      stream: true
    }),
  ], cb );
});

gulp.task('jekyll-build', function (done) {
    browserSync.notify('Building Jekyll');
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'}).on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});


// Launch BrowserSync server
gulp.task('browserSync', ['jekyll-build'], function() {
  browserSync.init({
    server: {
      baseDir: '_site/',
      index: 'index.html'
    },
  })
});

gulp.task('browserSync_clean', function() {
  browserSync.init({
    server: {
      baseDir: '_site/',
      index: 'index.html'
    },
  })
});


// Optimize SVGs
gulp.task('optimize', function (cb) {
  console.log('-- Optimizing SVG files');
  pump([
    gulp.src(paths.ico_input),
    svgmin(),
    gulp.dest(paths.ico_output),
  ], cb );
});


// Generate iconfont from SVG icons
gulp.task('webfont', ['optimize'], function (cb) {
  console.log('-- Generating webfont');
  pump([
    gulp.src(paths.ico_input),
    iconfontCss({
      fontName: fontName,
      fontPath: '../fonts/',
      targetPath: '../scss/_particl-icons.scss',
      cssClass: 'ico'
    }),
    iconfont({
      fontName: fontName,
      prependUnicode: true,
      formats: ['ttf', 'eot', 'woff', 'woff2'],
      normalize: true,
      fontHeight: 1001,
      descent: 140,
     }),
    gulp.dest(paths.font_output),
  ], cb );
});


// Watch for Sass/JS changes and compile + BrowserSync
gulp.task('watch', ['browserSync', 'jekyll-rebuild', 'sass', 'scripts'], function () {
//gulp.task('watch', ['sass', 'scripts'], function () {
  gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '*.md'], ['jekyll-rebuild']);
  gulp.watch(paths.scss, ['sass']);
  gulp.watch(paths.js_in, ['scripts']);
  gulp.watch(paths.ico_input, ['webfont']);
  gulp.watch(paths.template, browserSync.reload); 
});

// Without Jekyll compiling
gulp.task('watch_clean', ['browserSync_clean', 'sass', 'scripts'], function () {
//gulp.task('watch', ['sass', 'scripts'], function () {
  gulp.watch(paths.scss, ['sass']);
  gulp.watch(paths.js_in, ['scripts']);
  gulp.watch(paths.ico_input, ['webfont']);
  gulp.watch(paths.template, browserSync.reload); 
});

// Manual build (Sass compiling, JS concat/uglify)
gulp.task('build', ['sass', 'scripts', 'webfont'], function (){
  console.log('-- Building files');
});

gulp.task('default', ['build'], function (){
});
