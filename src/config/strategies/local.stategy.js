(function () {
    'use strict';

    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy,
        mongodb = require('mongodb').MongoClient;

    module.exports = function () {
        passport.use(new LocalStrategy(
            {
                usernameField: 'username',
                passwordField: 'password'
            },
            function (username, password, done) {
                var url = 'mongodb://localhost:27017/libraryApp';

                mongodb.connect(url, function (error, db) {
                    var usersCollection = db.collection('users');

                    usersCollection.findOne({username: username}, function (error, results) {
                        if (results.password === password) {
                            done(null, results);
                        } else {
                            // done('Bad Password!!!', null);
                            done(null, false, {message: 'Bad Password!!!'});
                        }
                    });
                });
            }
        ));
    };
})();
