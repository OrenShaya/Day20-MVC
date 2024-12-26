'use strict'

const gBooks = [
    {   id: 'bn4J78',
        title: 'The adventures of Lori Ipsi', // lol
        price: 120,
        imgUrl: 'img/lorem-ipsum.jpg'
    },
    {   id: 'bnK5K3',
        title: 'Kratos: The Atlas killer', // lol
        price: 150,
        imgUrl: 'img/kratos.webp'
    },
    {   id: 'bn7Z83',
        title: 'Zora: The Lost Hyrule Domain', // lol
        price: 90,
        imgUrl: 'img/zora.jpg'
    },
]

function getBooks() {
    return gBooks
}

function deleteBook(bookId) {
    const bookIdx = gBooks.findIndex(book => book.id === bookId)
    gBooks.splice(bookIdx, 1)
}

function updateBook(bookId) {
    
}