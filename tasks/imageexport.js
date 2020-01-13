const gulp = require('gulp');
const rename = require('gulp-rename');

module.exports = function imageExport() {

    return gulp.src(path.images.input)
        .pipe(gulp.dest(path.images.outputComponents))
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(path.images.outputPages))
        .pipe(rename({
            dirname: ''
        }))
        .pipe(gulp.dest(`${path.distAssets}/img/`));
}