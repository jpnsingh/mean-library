(function () {
    'use strict';

    var express = require('express'),
        app = express(),
        port = 5000;

    app.use(express.static('public'));
    app.use(express.static('src/views'));

    app.get('/', function (req, res) {
        res.send('Hello World!');
    });

    app.get('/books', function (req, res) {
        res.send('Hello Books!');
    });

    app.listen(port, function (error) {
        console.log('Server running on port: ' + port);
    });
})();
