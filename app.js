(function () {
    'use strict';

    var express = require('express'),
        bodyParser = require('body-parser'),
        cookieParser = require('cookie-parser'),
        passport = require('passport'),
        session = require('express-session'),
        authRouter = require('./src/routes/authRoutes'),
        adminRouter = require('./src/routes/adminRoutes'),
        bookRouter = require('./src/routes/bookRoutes'),
        authorRouter = require('./src/routes/authorRoutes'),
        port = 5000,
        app = express();

    var nav = [
        {link: '/books', text: 'Books'},
        {link: '/authors', text: 'Authors'}
    ];

    app.use(express.static('public'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(session({secret: 'library'}));

    require('./src/config/passport')(app);

    app.set('views', './src/views');
    app.set('view engine', 'ejs');

    // app.use(express.static('./src/views'));
    // var handlebars = require('express-handlebars');
    // app.engine('.hbs', handlebars({extreme: '.hbs'}));
    //
    // app.get('/jade', function (request, response) {
    //     app.set('view engine', '.jade');
    //
    //     response.render('index', {title: ' Jade', list: ['a', 'b']});
    // });
    //
    // app.get('/hbs', function (request, response) {
    //     app.set('view engine', '.hbs');
    //
    //     response.render('index', {title: 'HBS', list: ['a', 'b', 'c']});
    // });
    //
    // app.get('/ejs', function (request, response) {
    //     app.set('view engine', 'ejs');
    //
    //     response.render('index', {
    //         title: 'EJS',
    //         nav: [
    //             {title: 'Books', link: '/books'},
    //             {title: 'Authors', link: '/authors'}
    //         ]
    //     });
    // });

    app.use('/auth', authRouter());
    app.use('/admin', adminRouter());
    app.use('/authors', authorRouter());
    app.use('/books', bookRouter());

    app.get('/', function (request, response) {
        response.render('index', {
            title: 'Hello from render!',
            nav: nav
        });
    });

    app.listen(port, function (error) {
        console.log('Server running on port: ' + port);
    });
})();
