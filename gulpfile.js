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

gulp.task('inject', function () {
    var wiredep = require('wiredep').stream,
        gulpInject = require('gulp-inject'),

        options = {
            bowerJson: require('./bower.json'),
            directory: './public/lib',
            ignorePath: '../../public/'
        },
        gulpInjectSrc = gulp.src(['./public/css/*.css', './public/js/*.js'], {read: false}),
        gulpInjectOptions = {
            ignorePath: '/public/'
        };


    return gulp.src('./src/views/*.html')
        .pipe(wiredep(options))
        .pipe(gulpInject(gulpInjectSrc, gulpInjectOptions))
        .pipe(gulp.dest('./src/views'));
});
