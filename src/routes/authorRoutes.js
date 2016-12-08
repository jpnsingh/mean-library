(function () {
    'use strict';

    var authorRouter = require('express').Router(),
        authorController = require('../controllers/authorController')(null, {});

    module.exports = function () {
        authorRouter
            .use(authorController.middleware);

        authorRouter
            .route('/')
            .get(authorController.getIndex);

        authorRouter
            .route('/author/:id')
            .get(authorController.getAuthor);

        return authorRouter;
    };
})();
