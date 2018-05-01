/// <binding />
const gulp = require("gulp");
const sass = require("gulp-sass");
const ap = require("gulp-autoprefixer");
const bs = require("browser-sync").create();
const less = require("gulp-less");
const clean = require("gulp-clean");
const cp = require("child_process");
var jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";


const scssUrl = {
    scssInput: "./src/scss/style.scss",
    scssOutput: "./public/css"
};



gulp.task("jb", function(done) {
    return cp.spawn(jekyll, ["build", "--draft"], { stdio: "inherit" }).on("close", done);
});




//#region SASS
// used for compiling our own SCSS
gulp.task("sass", function () {
    return gulp
        .src(scssUrl.scssInput)
        .pipe(
        sass({
            includePaths: "node_modules",
            outputStyle: "compressed"
        }).on("error", sass.logError)
        )
        .pipe(ap({ browsers: ["last 2 versions", "ie >= 9"] }))
        .pipe(gulp.dest(scssUrl.scssOutput))
        .pipe(bs.reload({ stream: true }));
});

// used for deleting the old, "cached" version of the output css
gulp.task("sass-clean", function () {
    return gulp.src("_site/src/css/style.css").pipe(clean());
});

// used for watching our own scss for compilation
gulp.task("sass-watch", ["sass-clean", "sass"], function () {
    gulp.watch(["src/scss/**/*"], ["sass-clean", "sass"]);
});


gulp.task("serve", ["sass", "jb"], function () {
    bs.init({
        server: "_site",
        port: 1337
    });

});



gulp.task("watch", function() {
    gulp.watch(["./src/scss/**/*.scss", "./src/scss/*.scss"], ["sass"]);
    gulp.watch(["index.html","_layouts/*.html","_posts/*","_includes/*.html","_drafts/*","**/*.html"],["jb"]);
});
//#endregion











//#region file moving
// font-awesome
gulp.task("fs", function () {
    gulp
        .src("./node_modules/font-awesome/fonts/**/*")
        .pipe(gulp.dest("./public/fonts"));
});

//#endregion


gulp.task("default", ["serve", "watch"]);