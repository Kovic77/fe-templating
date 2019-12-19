const gulp = require('gulp');


module.exports = function indexExport() {
    return gulp.src('./src/templating/index.html')
        .pipe(gulp.dest('dist'));
};
