const books = require('./books');

const addBooks = (request, h) => {
    const isAvailable = true;
    const { title, author, year, publisher, isbn } = request.payload;
    const newBook = {
        title,
        author,
        year,
        publisher,
        isbn,
        isAvailable,
    }
    books.push(newBook);
    const isSuccess = books.filter((book) => book.isbn === isbn).length === 1;

    if (isSuccess) {
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil ditambahkan !',
            data: {
                booklist: books,
            }
        })
        response.code(201);
        return response;
    }

    const response = h.response({
        status: 'failed',
        message: 'Buku gagal ditambahkan',
    })

    response.code(500);
    return response;
}

module.exports = addBooks;
