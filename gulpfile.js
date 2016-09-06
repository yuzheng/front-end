var gulp = require('gulp');
var browserify = require('gulp-browserify');

// Basic usage
gulp.task('js', function() {
    // Single entry point to browserify
    gulp.src('src/js/app.js')
        .pipe(browserify({
          insertGlobals : false, //true
          debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./build/js'))
});