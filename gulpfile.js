const gulp = require('gulp'),
      sass = require('gulp-sass'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      cleancss = require('gulp-clean-css'),
      watch = require('gulp-watch');
gulp.task('styles-compile', () => {
    return gulp.src(['./assets/styles/custom.sass', './assets/styles/reset.css'])
                .pipe(sourcemaps.init())
                .pipe(sass().on('error', sass.logError))
                .pipe(concat('styles.css'))
//                .pipe(cleancss())
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('./assets/styles/'));
});
gulp.task('watch', () => {
    gulp.watch(['./assets/styles/custom.sass', './assets/styles/reset.css'], gulp.series('styles-compile'));
});