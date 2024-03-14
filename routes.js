const addBooks = require('./handlers');

const routes = [
    {
        method: 'POST',
        path: '/books',
        handler: addBooks,
    },
    {
        method: 'GET',
        path: '/books',
        handler: () => {
            
        }
    }
]

module.exports = routes;