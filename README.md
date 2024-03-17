# Library Backend 

## Deskripsi

Projek ini saya buat untuk mengeksplorasi logika-logika sederhana peminjaman
buku di sebuah perpustakaan. Sebuah buku adalah sebuah objek Javascript yang 
memiliki properti sebagai berikut :

- ISBN | string 
- Author | string 
- Year | string
- Publisher | string
- isAvailable | boolean

Ketika sebuah buku ditambahkan, ISBN, Author, Year, Publisher diambil dari
input pengguna, sedangkan isAvailable diatur secara default ke nilai true.
Properti ISBN haruslah bersifat unik, sehingga tidak boleh ada 2 atau lebih 
buku yang memiliki ISBN yang sama. Properti isAvailable menunjukkan ketersediaan 
buku untuk dipinjamkan.Ketika buku dipinjam, maka nilai tersebut menjadi false. 
Untuk penyimpanan data buku untuk sementara masih berupa sebuah array. 

## API Path

### Method GET
- http://localhost:8000/books; untuk mengambil keseluruhan data buku
- http://localhost:8000/books/:isbn; untuk mengambil data buku berdasarkan ISBN

### Method POST
- http://localhost:8000/books; untuk menambahkan buku

### Method PATCH
- http://localhost:8000/books/:isbn/borrowBook; untuk meminjam buku, dengan parameter kueri ISBN

### Method PUT
- - http://localhost:8000/books/:isbn/editBook; untuk mengedit data buku berdasarkan ISBN
