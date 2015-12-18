var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('clean-css-dir', function(){
  return gulp.src('./static/css/*.css', {read: false})
  .pipe(clean());
})

gulp.task('sass', function () {
    gulp.src('./static/sass/*.sass')
        .pipe(sass({
            errLogToConsole: true,
            sourceComments : 'normal'
        }))
        .pipe(concat('main-css.css'))
        .pipe(gulp.dest('./static/css'));
});

gulp.task('watch', function(){
    gulp.watch('./static/sass/*.sass',  ['sass']);
});

gulp.task('default', ['clean-css-dir', 'sass', 'watch']);

module.exports = gulp;