
var gulp   = require('gulp');
var sass   = require('gulp-sass');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('all', ['css', 'css-min']);

gulp.task('css', function(){
  return gulp.src('./_normalize.scss')
    .pipe(rename('normalize.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('normalize.css'))
    .pipe(gulp.dest('./'));
});

gulp.task('css-min', function(){
  return gulp.src('./_normalize.scss')
    .pipe(rename('normalize.scss'))
    .pipe(sass().on('error', sass.logError))
    .pipe(minify())
    .pipe(rename('normalize.min.css'))
    .pipe(gulp.dest('./'));
});

