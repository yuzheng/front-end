var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserify = require('gulp-browserify');

gulp.task('default', function(){
    return browserSync.init({
        server: {
            baseDir:'./'
        }
    });
});

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

