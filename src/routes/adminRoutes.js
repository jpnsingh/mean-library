(function () {
    'use strict';

    var adminRouter = require('express').Router(),
        adminController = require('../controllers/adminController')(null, {});

    module.exports = function () {
        adminRouter
            .use(adminController.middleware);

        adminRouter
            .route('/addBooks')
            .get(adminController.addBooks);

        return adminRouter;
    };
})();
