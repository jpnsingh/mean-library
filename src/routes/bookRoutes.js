(function () {
    'use strict';

    var booksRouter = require('express').Router();

    var books = [
        {
            title: 'Design Patterns',
            author: 'GOF'
        },
        {
            title: 'Design Principles',
            author: 'Head First'
        }
    ];

    booksRouter
        .route('/')
        .get(function (req, res) {
            res.render('books', {
                title: 'Books',
                nav: [
                    {title: 'Books', link: '/books'},
                    {title: 'Authors', link: '/authors'}
                ],
                books: books
            });
        });

    booksRouter
        .route('/single')
        .get(function (req, res) {
            res.send('Hello Book 1!');
        });

    module.exports = booksRouter;
})();
