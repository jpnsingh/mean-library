(function () {
    'use strict';

    var bookRouter = require('express').Router(),
        bookController = require('../controllers/bookController')(null, {});

    module.exports = function () {
        bookRouter.use(bookController.middleware);

        bookRouter
            .route('/')
            .get(bookController.getIndex);

        bookRouter
            .route('/:id')
            .get(bookController.getById);

        return bookRouter;
    };
})();
