var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    gulp.src('./public/sass/*.sass')
        .pipe(sass({
            errLogToConsole: true,
            sourceComments : 'normal'
        }))
        .pipe(concat('main-css.css'))
        .pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function(){
    gulp.watch('./public/sass/*.sass',  ['sass']);
});

gulp.task('clean-css-dir', function(){
	return gulp.src('./public/css/*.css', {read: false})
	.pipe(clean());
});

gulp.task('default', ['clean-css-dir', 'sass', 'watch']);

