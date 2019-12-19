const gulp = require('gulp');
const sassGlob = require('gulp-sass-glob');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

module.exports = function styleBuild() {

    return gulp.src(path.buildStyle)
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(autoprefixer({
            grid: 'autoplace'
        }))
        .pipe(gulp.dest(path.style.output))
        .pipe(browserSync.stream());
};