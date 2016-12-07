(function () {
    'use strict';

    var adminRouter = require('express').Router();

    module.exports = function (nav) {
        adminRouter
            .route('/addBooks')
            .get(function (request, response) {
                response.send('Inserting books...');
            });

        return adminRouter;
    };
})();
