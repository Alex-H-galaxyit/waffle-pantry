module.exports = () => $.gulp.task("scripts", webpack)

function webpack() {
  const webpackStream = require("webpack-stream")

  return $.gulp
    .src("./src/assets/js/main.js")
    .pipe(webpackStream(require("../../webpack.config")))
    .pipe($.gulp.dest("./build/js"))
    .pipe(
      ifenv(
        $.browserSync.reload({
          stream: true
        }),
        "development"
      )
    )
}
