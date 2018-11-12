const gulp = require("gulp");
const sass = require("gulp-sass");
const cleanCSS = require("gulp-clean-css");
const autoPrefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const pump = require("pump");

gulp.task("script", function(cb) {
  pump([gulp.src("src/js/*.js"), babel(), gulp.dest("public/js")], cb);
});

// copy HTML file to the public folder
gulp.task("copyHtml", function() {
  gulp.src("./src/index.html").pipe(gulp.dest("./public"));
});

// compile SCSS to CSS, adding prefix, minifying CSS
gulp.task("sass:compile", function() {
  gulp
    .src("./src/css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoPrefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./public/css"));
});

// watch over the changes in source files
gulp.task("watch", function() {
  gulp.watch("./src/index.html", ["copyHtml"]);
  gulp.watch("./src/css/*.scss", ["sass:compile"]);
  gulp.watch("./src/js/*.js", ["script"]);
});

// default task
gulp.task("default", ["copyHtml", "sass:compile", "script", "watch"]);
