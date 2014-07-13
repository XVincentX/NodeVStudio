var gulp = require('gulp');
var angularHtmlify = require('gulp-angular-htmlify');
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var angularTemplates = require('gulp-angular-templatecache');
var es = require('event-stream');
var minifyHTML = require('gulp-minify-html');

gulp.task('htmlViews', function () {
    return gulp.src('app/**/*.html')
         .pipe(minifyHTML({ quotes: true }))
         .pipe(angularHtmlify())
         .pipe(angularTemplates('Views.js', { module: 'mantis', standalone: false, root: 'app' }))
         .pipe(gulp.dest('./build'));
});

gulp.task('scripts', ['htmlViews'], function () {
    return gulp.src('./index.html')
      .pipe(inject(es.merge(gulp.src(['./bower_components/**/*.js', '!./bower_components/**/*.min.js', './app/app.js', './build/Views.js'], { read: false }), gulp.src(['./app/**/*.js', '!./app/**/*.no.js', '!./app/app.js']).pipe(angularFilesort()))))
      .pipe(minifyHTML({ quotes: true }))
      .pipe(gulp.dest('./build'));
});

gulp.task('shared', function () {
    // place code for your default task here
});

gulp.task('Debug', ['shared'], function () {
    // place code for your default task here
});

gulp.task('Release', ['shared', 'htmlViews', 'scripts'], function () {
    // place code for your default task here
});