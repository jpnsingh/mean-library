var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jscs = require('gulp-jscs'),
    nodemon = require('gulp-nodemon');

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


    return gulp.src('./src/views/*.jade')
        .pipe(wiredep(options))
        .pipe(gulpInject(gulpInjectSrc, gulpInjectOptions))
        .pipe(gulp.dest('./src/views'));
});

gulp.task('serve', ['lint', 'inject'], function () {
    var options = {
        script: 'app.js',
        delayTime: 1,
        env: {
            'PORT': 3000
        },
        watch: jsFiles
    };

    return nodemon(options)
        .on('restart', function () {
            console.log('Restarting...');
        });
});