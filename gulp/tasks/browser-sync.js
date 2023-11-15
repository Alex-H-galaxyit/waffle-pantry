module.exports = () =>
  $.gulp.task("serve", () => {
      return $.browserSync.init({
        server: "./build",
        port: 3000
      })
    }
  )

