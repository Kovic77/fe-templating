const del = require("del");

// Clean assets
module.exports = function clean() {

    console.log('Cleaning dist folder');
    return del(["./dist/"])
}