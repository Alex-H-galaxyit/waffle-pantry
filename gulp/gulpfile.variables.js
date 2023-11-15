const config = require("./gulpfile.config")
const ifEnv = require("gulp-if-env")
//https://www.npmjs.com/package/gulp-if-env

module.exports = (global) => {
  global.$ = {
    path: {
      tasks: require("./tasks/index.js")
    },
    gulp: require("gulp"),
    merge: require("merge-stream"),
    del: require("del"),
    fs: require("fs"),
    browserSync: require("browser-sync").create(),
    gp: require("gulp-load-plugins")()
  }

  global.prod = ifEnv("production")
  global.json = (path) => JSON.parse($.fs.readFileSync(`./src/json/${path}.json`, "utf8"))
  global.ifenv = (fn, type = "production") => ifEnv(type, fn) // production || development

  for (const [key, value] of Object.entries(config)) {
    global[key] = value
  }

  $.path.tasks.forEach((taskPath) => require(taskPath)())
}
