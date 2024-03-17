const books = require('./books');

const addBooks = (request, h) => {
    const isAvailable = true;
    const { title, author, year, publisher, isbn } = request.payload;
    const newBook = {
        isbn,
        title,
        author,
        year,
        publisher,
        isAvailable,
    }

    const isUnique = books.find((book) => book.isbn === isbn) === undefined;

    if (isUnique) {
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
    }

    const response = h.response({
        status: 'failed',
        message: 'Buku gagal ditambahkan',
    })

    response.code(500);
    return response;
}

const getBooks = () => ({
    status: 'success',
    data: books,
})

const borrowBookByIsbn = (request, h) => {
    const isbn = request.params.isbn;
    const selectedBook = books.findIndex((book) => book.isbn === isbn && book.isAvailable);

    if (selectedBook !== -1) {
        books[selectedBook].isAvailable = false;
        const response = h.response({
            status: 'success',
            message: 'Buku berhasil dipinjam',
            data: {
                bookBorrowed: books[selectedBook]
            },
        })
        response.code(200);
        return response;
    }

    const response = h.response({
        status: 'error',
        message: 'Buku tidak ditemukan',
    })

    response.code(404);
    return response;
}

const getBookByIsbn = (request, h) => {
    const isbn = request.params.isbn;
    const book = books.filter((book) => book.isbn === isbn);
    const found = book.length === 1;

    if (found) {
        const response = h.response({
            status: 'success',
            message: 'Data ditemukan !',
            data: book[0],
        })
        response.code(200);
        return response;
    } else {
        const response = h.response({
            status: 'failed',
            message: 'Data Tidak Ditemukan',
        })
        response.code(404);
        return response;
    }
}

const editBook = (request, h) => {
    const isbn = request.params.isbn;
    const selectedBook = books.findIndex((book) => book.isbn === isbn);
    const found = selectedBook !== -1;

    if (found) {
        books[selectedBook].isbn = request.payload.isbn;
        books[selectedBook].title = request.payload.title;
        books[selectedBook].author = request.payload.author;
        books[selectedBook].year = request.payload.year;
        books[selectedBook].publisher = request.payload.publisher;
        const response = h.response({
            status: 'success',
            message: 'Data buku berhasil diubah !',
        })
        response.code(200);
        return response;
    } else {
        const response = h.response({
            status: 'failed',
            message: 'Buku tidak ditemukan',
        })
        response.code(404);
        return response;
    }
}

module.exports = { addBooks, getBooks, borrowBookByIsbn, getBookByIsbn, editBook };
