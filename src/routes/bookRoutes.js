(function () {
    'use strict';

    var booksRouter = require('express').Router(),
        mongodb = require('mongodb').MongoClient,
        objectId = require('mongodb').ObjectID;

    booksRouter
        .route('/')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (error, db) {
                var collection = db.collection('books');
                collection.find({}).toArray(function (error, results) {
                    res.render('bookListView', {
                        title: 'Books',
                        nav: [
                            {title: 'Books', link: '/books'},
                            {title: 'Authors', link: '/authors'}
                        ],
                        books: results
                    });
                });
            });
        });

    booksRouter
        .route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (error, db) {
                var collection = db.collection('books');

                collection.findOne({_id: new objectId(id)}, function (error, results) {
                    res.render('bookView', {
                        title: 'Books',
                        nav: [
                            {title: 'Books', link: '/books'},
                            {title: 'Authors', link: '/authors'}
                        ],
                        book: results
                    });
                });
            });
        });

    module.exports = booksRouter;
})();
