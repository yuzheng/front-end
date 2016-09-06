var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var sourcemap = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var del = require('del');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var browserify = require('gulp-browserify');
var ghPage = require('gulp-gh-pages')

gulp.task('default', ['watch'], function() {
    return browserSync.init({
        server: {
            baseDir: './'
        }
    });
})

gulp.task('clean', function(callback) {
    return del(['./dist'], callback);
});

gulp.task('images', function() {
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images/'))
    .pipe(notify('images task complete'));
});

gulp.task('css', function() {
    return gulp.src('./src/sass/main.scss')
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemap.write())    
    .pipe(gulp.dest('./dist/css/'))
    .pipe(cleanCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(notify('Found file: <%= file.relative %>!'));
});

// gulp.task('js', function() {
//     return gulp.src('./src/js/**/*')
//     .pipe(sourcemap.init())
//     .pipe(concat('bundle.js'))
//     .pipe(sourcemap.write())
//     .pipe(gulp.dest('./dist/js/'))
//     .pipe(uglify())
//     .pipe(rename({ suffix: '.min' }))  
//     .pipe(gulp.dest('./dist/js/'))
//     .pipe(notify('Found file: <%= file.relative %>!'));
// });

gulp.task('js', function() {
    return gulp.src('./src/js/app.js')
    .pipe(browserify({
        insertGlobals: false,
        debug: !gulp.env.production
    }))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(notify('Found file: <%= file.relative %>!'));
});

gulp.task('build', ['css', 'js', 'images'], function() {});

gulp.task('reload', function() {
    browserSync.reload();
})

gulp.task('watch', ['build'], function() {
    // gulp.watch(['./src/js/**/*'], ['js']);
    gulp.watch(['./src/sass/**/*'], ['css']);
    gulp.watch(['./src/images/**/*'], ['images']);
    gulp.watch(['./dist/**/*'], ['reload'])
});


gulp.task('deploy', function() {
    gulp.src(['./index.html', './dist/**/*'], { base: __dirname })
    .pipe(ghPage());
})