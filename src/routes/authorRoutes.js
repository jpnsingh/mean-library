(function () {
    'use strict';

    var authorRouter = require('express').Router();

    authorRouter
        .route('/')
        .get(function (req, res) {
            res.send('Hello Authors!');
        });

    authorRouter
        .route('/single')
        .get(function (req, res) {
            res.send('Hello Author 1!');
        });

    module.exports = authorRouter;
})();
