'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: [    
      "last 1 version",
      "> 1%",
      "IE 10"
    ],
      cascade: false
  }))
  .pipe(gulp.dest('./css'));
});

gulp.task('minify-css', function () {
  return gulp.src('css/style.css')
    .pipe(sourcemaps.init())// init before SASS compilation
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('../maps'))//write LAST
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('sass', 'minify-css', 'watch'));