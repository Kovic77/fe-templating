//Paths
module.exports = path = {
    dist: 'dist/',
    distComponents: 'dist/components/',
    distPages: 'dist/pages/',
    distAssets: 'dist/assets',
    src: 'src/',
    srcComponents: 'src/templating/components/',
    srcPages: 'src/templating/pages/',
    style: {
        input: 'src/assets/scss/style.scss',
        output: 'dist/assets/css'
    },
    images: {
        input: './src/templating/components/**/img/*',
        outputComponents: './dist/components/',
        outputPages: './dist/pages/img',
    },
    srcTemplates: 'src/templating/',
    buildStyle: 'src/templating/build-configuration/build.scss'
}