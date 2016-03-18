var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var inline = require('gulp-mc-inliner');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var inlinesource = require('gulp-inline-source');

// Include the config
var config = require('./config.json');


// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
    .pipe(sass({errLogToConsole: true}))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('src/css'));
});

// BrowserSync
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./output",
            index: "demo.html"
        },
        open: "external",
        logPrefix: "Gulp Email Creator"
    });
});

// Build our templates
gulp.task('build', function() {
    return gulp.src('src/html/*.html')
        .pipe(inlinesource())
        .pipe(inline(config.APIKEY, false))
        .pipe(gulp.dest('./output'));
        //.pipe(reload({stream:true}));
});

// Reload
gulp.task('reload', function() {
    reload({stream:true});
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch('src/html/*.html', ['build', reload]);
    gulp.watch('src/css/*.css', ['build', reload]);
});

// Default Task
gulp.task('default', ['sass', 'browser-sync', 'build', 'watch']);
