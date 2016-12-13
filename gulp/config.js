(function () {
    'use strict';

    module.exports = {
        files: {
            js: ['*.js', 'src/**/*.js']
        },
        inject: {
            src: './src/views/*.ejs',
            dest: './src/views',
            wiredep: {
                options: {
                    bowerJson: require('../bower.json'),
                    directory: './public/lib',
                    ignorePath: '../../public/'
                }
            },
            gulp: {
                src: {
                    css: './public/css/*.css',
                    js: './public/js/*.js'
                },
                options: {
                    ignorePath: '/public/'
                }
            }
        }
    };
})();
