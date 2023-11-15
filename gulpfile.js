const variables = require("./gulp/gulpfile.variables")
variables(global)

// Build task
$.gulp.task(
  "build",
  $.gulp.series(
    "clean",
    $.gulp.parallel("twig", "scripts", "fonts:copy", "svg", "media", "htaccess", "json"),
    "styles",
    "resources:copy",
    "pwa:sw",
    "pwa:configs",
    "pwa:favicons",
    "media:tiny",
    "revision",
    "inject:assets",
    "gzip",
  ),
)

// Default task
$.gulp.task("default", $.gulp.series("build", "inject:menu-global", $.gulp.parallel("watch", "serve")))
