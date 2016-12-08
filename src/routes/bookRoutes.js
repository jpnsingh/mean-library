(function () {
    'use strict';

    var bookRouter = require('express').Router(),
        mongodb = require('mongodb').MongoClient,
        ObjectID = require('mongodb').ObjectID;

    module.exports = function () {
        bookRouter.use(function (request, response, next) {
            if (!request.user) {
                response.redirect('/');
            }
            next();
        });

        bookRouter
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

        bookRouter
            .route('/:id')
            .get(function (req, res) {
                var id = req.params.id;
                var url = 'mongodb://localhost:27017/libraryApp';

                mongodb.connect(url, function (error, db) {
                    var collection = db.collection('books');

                    collection.findOne({_id: new ObjectID(id)}, function (error, results) {
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

        return bookRouter;
    };
})();
