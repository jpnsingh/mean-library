(function () {
    'use strict';

    var express = require('express'),
        app = express(),
        port = 5000;

    app.use(express.static('public'));

    app.set('views', './src/views');

    // app.use(express.static('src/views'));
    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

    var handlebars = require('express-handlebars');
    app.engine('.hbs', handlebars({extreme: '.hbs'}));

    app.get('/jade', function (req, res) {
        app.set('view engine', '.jade');

        res.render('index', {title: ' Jade', list: ['a', 'b']});
    });

    app.get('/hbs', function (req, res) {
        app.set('view engine', '.hbs');

        res.render('index', {title: 'HBS', list: ['a', 'b', 'c']});
    });

    app.get('/ejs', function (req, res) {
        app.set('view engine', 'ejs');

        res.render('index', {
            title: 'EJS',
            nav: [
                {title: 'Books', link: '/books'},
                {title: 'Authors', link: '/authors'}
            ]
        });
    });

    app.set('view engine', 'ejs');

    var bookRouter = require('./src/routes/bookRoutes');
    app.use('/books', bookRouter);

    var adminRouter = require('./src/routes/adminRoutes')();
    app.use('/admin', adminRouter);

    var authorRouter = require('./src/routes/authorRoutes');
    app.use('/authors', authorRouter);

    app.listen(port, function (error) {
        console.log('Server running on port: ' + port);
    });
})();
