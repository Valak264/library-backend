const { addBooks, getBooks } = require('./handlers');

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
    }
]

module.exports = routes;