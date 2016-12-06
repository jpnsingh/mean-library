var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs');

var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task('lint', function () {
    return gulp
        .src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe(jscs());
});