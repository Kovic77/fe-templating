const gulp = require('gulp');
var concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

module.exports = function scripts() {
    return gulp.src(["./src/assets/js/**/*.js", `${path.srcComponents}**/js/*.js`])
        .pipe(concat('src.js'))
        .pipe(gulp.dest("./dist/assets/js/"))
        .pipe(browserSync.stream());
};