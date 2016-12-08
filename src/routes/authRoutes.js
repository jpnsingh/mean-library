(function () {
    'use strict';

    var authRouter = require('express').Router(),
        mongodb = require('mongodb').MongoClient,
        passport = require('passport');

    module.exports = function () {
        authRouter
            .route('/signUp')
            .post(function (request, response) {
                var user = request.body;
                console.log(user);

                var url = 'mongodb://localhost:27017/libraryApp';

                mongodb.connect(url, function (error, db) {
                    var usersCollection = db.collection('users');

                    usersCollection.insert(user, function (error, results) {
                        request.login(results.ops[0], function () {
                            response.redirect('/auth/profile');
                        });
                    });
                });
            });

        authRouter
            .route('/signIn')
            .post(passport.authenticate('local', {
                failureRedirect: '/'
            }), function (request, response) {
                response.redirect('/auth/profile');
            });

        authRouter
            .route('/profile')
            .all(function (request, response, next) {
                if (!request.user) {
                    response.redirect('/');
                }
                next();
            })
            .get(function (request, response) {
                console.log(request.user);
                response.json(request.user);
                // response.render('userProfileView');
            });

        return authRouter;
    };
})();
