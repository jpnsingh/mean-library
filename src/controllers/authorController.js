(function () {
    'use strict';

    module.exports = function (authorService, nav) {
        var middleware = function (request, response, next) {
            if (!request.user) {
                response.redirect('/');
            } else {
                next();
            }
        };

        var getIndex = function (request, response) {
            response.send('Hello Authors!');
        };

        var getAuthor = function (request, response) {
            response.send('Hello Author' + request.params.id);
        };

        return {
            middleware: middleware,
            getIndex: getIndex,
            getAuthor: getAuthor
        };
    };
})();
