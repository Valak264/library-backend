const { addBooks, getBooks, borrowBookByIsbn, getBookByIsbn, editBook } = require('./handlers');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooks,
    },
    {
        method: 'GET',
        path: '/books',
        handler: getBooks,
    },
    {
        method: 'GET',
        path: '/books/{isbn}',
        handler: getBookByIsbn,
    },
    {
        method: 'PATCH',
        path: '/books/{isbn}/borrowBook',
        handler: borrowBookByIsbn,
    },
    {
        method: 'PUT',
        path: '/books/{isbn}/editBook',
        handler: editBook,
    }
]

module.exports = routes;