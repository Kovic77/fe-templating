const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const fs = require('fs');
const cached = require('gulp-cached');
const browserSync = require('browser-sync').create();

module.exports = function componentsCreateHtml() {
    const getComponentsList = (directory) =>
        fs.readdirSync(directory)
        .filter(file => fs.statSync(`${directory}/${file}`).isDirectory());

    const getPagesList = (directory) =>
        fs.readdirSync(directory)
        .filter(file => file.endsWith(".html") && file != "index.html");

    const componentlist = getComponentsList(path.srcComponents);

    let componentStatesNames = {};

    for (let i = 0; i < componentlist.length; i++) {
        const componentStates = getPagesList(`src/templating/components/${componentlist[i]}`);
        componentStatesNames[componentlist[i]] = componentStates;
    }

    return gulp.src(`${path.srcTemplates}/components/**/*.html`)

        .pipe(nunjucksRender({
            path: path.srcTemplates,
            data: {
                components: componentlist,
                modif: componentStatesNames,
         
            }
        }))
        .pipe(cached('html'))
        .pipe(gulp.dest(path.distComponents))
        .pipe(browserSync.stream());
}