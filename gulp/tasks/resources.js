const resourcesCopy = () => $.gulp.src("./src/assets/*.*").pipe($.gulp.dest("./build"))

module.exports = () => {
  $.gulp.task("resources:copy", resourcesCopy)
}