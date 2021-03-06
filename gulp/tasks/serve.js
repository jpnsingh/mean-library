(function () {
    'use strict';

    var gulp = require('gulp'),
        nodemon = require('gulp-nodemon'),
        config = require('../config');

    gulp.task('serve', ['lint', 'inject'], function () {
        var options = {
            script: 'app.js',
            delayTime: 1,
            env: {
                'PORT': 3000
            },
            watch: config.files.js
        };

        return nodemon(options).on('restart', function () {
            console.log('Restarting...');
        });
    });
})();
