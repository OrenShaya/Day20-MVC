'use strict'

const STORAGE_KEY = 'books'
var gBooks = []

function getBooks() {
    var books = loadFromStorage(STORAGE_KEY)
    if (!books || !books.length) {
        books = [
            addBook('The adventures of Lori Ipsi', 120, 5, 'img/lorem-ipsum.jpg'),
            addBook('Kratos: The Atlas killer', 150, 4, 'img/kratos.webp'),
            addBook('Zora: The Lost Hyrule Domain', 90, 3, 'img/zora.webp'),
        ]
        saveToStorage(STORAGE_KEY, books)
    }
    gBooks = books
    return books
}

function getBook(bookId) {
    const books = loadFromStorage('books')
    return books.filter(book => book.id === bookId)[0]
}

function addBook(title, price, rating = 3, imgUrl='img/default.webp') {
    var newBook = {   
        id: generateNewBookId(),
        title: title,
        price: price,
        rating: rating,
        imgUrl: imgUrl
    }
    gBooks.unshift(newBook)
    saveToStorage(STORAGE_KEY, gBooks)
    return newBook
}

function deleteBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    const book = gBooks.splice(bookIdx, 1)

    saveToStorage(STORAGE_KEY, gBooks)
    return book[0].title
}

function updateBook(bookId, newPrice) {
    const book = gBooks.find(book => book.id === bookId)
    book.price = newPrice
    
    saveToStorage(STORAGE_KEY, gBooks)
}

function filter(filter) {
    var books = gBooks
    
    if (!filter.rating && !filter.title) return []

    
    
    if (filter.title) {
        
        books = books.filter(book => 
            book.title.toLowerCase().includes(filter.title.toLowerCase()))
    }

    if (filter.rating) {
        
        books = books.filter(book => book.rating >= filter.rating)
    }
    generateURL(filter)
    
    return books
}

function generateURL(filterObj) {
    const queryParams = new URLSearchParams()

    if (filterObj.title) queryParams.set('title', filter.title)
    if (filterObj.rating) queryParams.set('rating', filter.rating)
    
    const newUrl =
        window.location.protocol + "//" +
        window.location.host +
        window.location.pathname + '?' + queryParams.toString()

    window.history.pushState({ path: newUrl }, '', newUrl)
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