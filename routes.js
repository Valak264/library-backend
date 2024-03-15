const { addBooks, getBooks, borrowBookByIsbn } = require('./handlers');

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
        method: 'PUT',
        path: '/borrowBook',
        handler: borrowBookByIsbn,
    }
]

module.exports = routes;