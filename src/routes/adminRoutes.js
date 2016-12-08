(function () {
    'use strict';

    var adminRouter = require('express').Router(),
        mongodb = require('mongodb').MongoClient;

    var books = [
        {
            title: 'Design Patterns',
            author: 'GOF'
        },
        {
            title: 'Design Principles',
            author: 'Head First'
        },
        {
            title: 'Thinking in Java',
            author: 'Bruce Eckel'
        },
        {
            title: 'Thinking in C++',
            author: 'Bruce Eckel'
        }
    ];

    module.exports = function () {
        adminRouter
            .route('/addBooks')
            .get(function (request, response) {
                var url = 'mongodb://localhost:27017/libraryApp';

                mongodb.connect(url, function (error, db) {
                    var collection = db.collection('books');

                    collection.insertMany(books, function (error, results) {
                        response.send(results);
                        db.close();
                    });
                });
            });

        return adminRouter;
    };
})();
