'use strict'

const gBooks = [
    {   id: 'bn4J78',
        title: 'The adventures of Lori Ipsi',
        price: 120,
        imgUrl: 'img/lorem-ipsum.jpg'
    },
    {   id: 'bnK5K3',
        title: 'Kratos: The Atlas killer',
        price: 150,
        imgUrl: 'img/kratos.webp'
    },
    {   id: 'bn7Z83',
        title: 'Zora: The Lost Hyrule Domain',
        price: 90,
        imgUrl: 'img/zora.jpg'
    },
]

function getBooks() {
    return gBooks
}

function getBook(bookId) {
    return gBooks.filter(book => book.id === bookId)[0]
}

function addBook(title, price) {
    var newBook = {   
        id: generateNewBookId(),
        title: title,
        price: price,
        imgUrl: ''
    }
    gBooks.push(newBook)
    console.log(gBooks)    
}

function deleteBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)
}

function updateBook(bookId, newPrice) {
    const book = gBooks.find(book => book.id === bookId)
    book.price = newPrice
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