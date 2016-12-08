(function () {
    'use strict';

    var authRouter = require('express').Router(),
        mongodb = require('mongodb').MongoClient;

    module.exports = function () {
        authRouter
            .route('/signUp')
            .post(function (request, response) {
                var user = request.body;

                console.log(user);

                request.login(user, function () {
                    response.redirect('/auth/profile');
                });

                // var url = 'mongodb://localhost:27017/libraryApp';
                //
                // mongodb.connect(url, function (error, db) {
                //     var collection = db.collection('books');
                // });
            });

        authRouter
            .route('/profile')
            .get(function (request, response) {
                console.log(request);
                response.json(request.user);
            });

        return authRouter;
    };
})();
