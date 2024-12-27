'use strict'

const STORAGE_KEY = 'books'
const gBooks = []

function getBooks(filteredBooks = []) {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = [
            addBook('The adventures of Lori Ipsi', 120, 'img/lorem-ipsum.jpg'),
            addBook('Kratos: The Atlas killer', 150, 'img/kratos.webp'),
            addBook('Zora: The Lost Hyrule Domain', 90, 'img/img/Zora.webp'),
        ]
        saveToStorage(STORAGE_KEY, books)
    }
    books.forEach(book => gBooks.push(book))
    return books
}

function getBook(bookId) {
    const books = loadFromStorage('books')
    return books.filter(book => book.id === bookId)[0]
}

function addBook(title, price, imgUrl='img/default.webp') {
    var newBook = {   
        id: generateNewBookId(),
        title: title,
        price: price,
        imgUrl: imgUrl
    }
    gBooks.unshift(newBook)
    saveToStorage(STORAGE_KEY, gBooks)
    return newBook
}

function deleteBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)

    saveToStorage(STORAGE_KEY, gBooks)
}

function updateBook(bookId, newPrice) {
    const book = gBooks.find(book => book.id === bookId)
    book.price = newPrice
    
    saveToStorage(STORAGE_KEY, gBooks)
}

function filterByTitle(title) {
    return gBooks.filter(book => 
        book.title.toLowerCase().includes(title.toLowerCase()))
}

function generateNewBookId() {
    return `bn${getRandomInt(1, 9)}${getRandomLetter()}${getRandomInt(10, 99)}`
}

function getRandomLetter() {
    return String.fromCharCode(getRandomInt(65, 90))
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}