const gulp = require('gulp');
const gulpStylelint = require('gulp-stylelint');

module.exports = function styleLint() {

    return gulp.src('src/**/*.scss')
        .pipe(gulpStylelint({
            failAfterError: false,
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
};