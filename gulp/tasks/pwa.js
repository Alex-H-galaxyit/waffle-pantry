const path = require("path")
const fs = require("fs")
const through = require("through2")
const sharp = require("sharp")
const generate = require("../create-pwa/generate-images")
const generateManifest = require("../create-pwa/generate-manifest")
const generateConfigXml = require("../create-pwa/generate-config-xml")
const generateAppcache = require("../create-pwa/generate-appcache")

const copy_sw = () => $.gulp
  .src("./src/assets/pwa/service-worker.js")
  .pipe($.gulp.dest("./build"))


const pwa_configs = () => $.gulp.src("./src/assets/pwa/manifest.json")
  .pipe(generateManifest())
  .pipe($.gulp.dest("./build"))
  .pipe(generateConfigXml())
  .pipe($.gulp.dest("./build"))
  .pipe(generateAppcache())
  .pipe($.gulp.dest("./build"))

const pwa_favicons = () => {
  const favicons = $.gulp
    .src("./src/assets/pwa/favicon.png")
    .pipe($.gulp.dest("build/favicons"))
    // .pipe(generate.faviconIcoGenerate(path.join(__dirname, '../../build/favicons')))
    .pipe(generate.faviconGenerate(path.join(__dirname, "../../build/favicons")))

  const splashScreens = $.gulp
    .src("./src/assets/pwa/launch-screen.png")
    .pipe($.gulp.dest("build/launch-screens"))
    .pipe(generate.launchScreensGenerate(path.join(__dirname, "../../build/launch-screens")))

  return $.merge(favicons, splashScreens)
}

module.exports = () => {
  $.gulp.task("pwa:sw", copy_sw)
  $.gulp.task("pwa:configs", pwa_configs)
  $.gulp.task("pwa:favicons", pwa_favicons)
}
