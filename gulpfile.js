const gulp = require('gulp');
const browserSync = require('browser-sync').create();




//Paths
const path = require("./tasks/paths/")



function watchFiles() {
    browserSync.init({
        server: {
            baseDir: path.dist
        }
    });
    gulp.watch(["src/**/*.scss", path.buildStyle]).on('change', gulp.series(style, styleBuild, browserSync.reload));
    gulp.watch(`${path.srcComponents}/**/*.html`).on('change', gulp.series(componentsCreateHtml, createPages, browserSync.reload));
    gulp.watch(`${path.srcComponents}`).on('all', gulp.series(componentsCreateHtml, createPages, browserSync.reload));
    gulp.watch(`${path.srcPages}**/*.html`).on('change', gulp.series(createPages, browserSync.reload));
    gulp.watch(`${path.srcPages}`).on(['all'], gulp.series(createPages, browserSync.reload));
    gulp.watch(`${path.srcComponents}**/js/*.js`).on('change', gulp.series(scripts, browserSync.stream));
    gulp.watch(`${path.images.input}`).on(['all'], gulp.series(imageExport, browserSync.reload));
    gulp.watch('src/templating/build-configuration/**/*.html').on('change', gulp.series(componentsCreateHtml, browserSync.reload));

  
}

const clean = require("./tasks/clean");
const style = require("./tasks/style");
const stylelint = require("./tasks/stylelint");
const styleBuild = require("./tasks/stylebuild");
const imageExport = require("./tasks/imageexport");
const componentsCreateHtml = require("./tasks/componentsCreateHtml");
const createPages = require("./tasks/createPages");
const scripts = require("./tasks/scripts");
const indexExport = require("./tasks/indexExport");



const build = gulp.series(clean, gulp.parallel(indexExport, scripts, style, componentsCreateHtml, createPages, imageExport, styleBuild));
const watch = gulp.series(clean, gulp.parallel(indexExport, scripts, style, watchFiles, componentsCreateHtml, createPages, imageExport, styleBuild));
const validate = stylelint;
const cleaner = gulp.series(clean, gulp.parallel(indexExport, scripts, style, componentsCreateHtml, createPages, imageExport));


exports.cleaner = cleaner;
exports.validate = validate;
exports.build = build;
exports.default = watch;