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
            res.render('bookListView', {
                title: 'Books',
                nav: [
                    {title: 'Books', link: '/books'},
                    {title: 'Authors', link: '/authors'}
                ],
                books: books
            });
        });

    booksRouter
        .route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Books',
                nav: [
                    {title: 'Books', link: '/books'},
                    {title: 'Authors', link: '/authors'}
                ],
                book: books[id]
            });
        });

    module.exports = booksRouter;
})();
