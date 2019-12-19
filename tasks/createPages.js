const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const fs = require('fs');
const nunjucksRender = require('gulp-nunjucks-render');
const cached = require('gulp-cached');



module.exports = function createPages() {
    const getPagesList = (directory) =>
        fs.readdirSync(directory)
        .filter(file => file.endsWith(".html") && file != "index.html");

    return gulp.src(`${path.srcTemplates}/pages/**/*.html`)
        .pipe(nunjucksRender({
            path: path.srcTemplates,
            data: {
                pages: getPagesList(path.srcPages)
            }
        }))
        .pipe(cached('html'))
        .pipe(gulp.dest(path.distPages))
        .pipe(browserSync.stream());
}