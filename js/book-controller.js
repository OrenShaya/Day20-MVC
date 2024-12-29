'use strict'

function onInit() {
    render()
}
  
function render(filteredBooks = []) {
    const books = (filteredBooks.length) ? filteredBooks : getBooks()

    const elBookList = document.querySelector('.book-table tbody')
    var strHtmls = '<tbody>'
    books.forEach(book => {
        strHtmls += 
        `<tr>
        <td>${book.title}</td>
        <td>${book.price}</td>
        <td>${starRating(book.rating)}</td>
        <td>
        <button onclick="onReadBook('${book.id}')"> Read   </button> 
        <button onclick="onUpdateBook('${book.id}')"> Update </button> 
        <button onclick="onDeleteBook('${book.id}')"> Delete </button> 
        </td>
        </tr>\n`
    })
    strHtmls += '</tbody>'
    elBookList.innerHTML = strHtmls
}

function onReadBook(bookId) {
    console.log('Reading book', bookId)

    const elBookModal = document.querySelector('.book-modal')
    elBookModal.style.display = 'block'

    const book = getBook(bookId)
    console.log('Book:', book)
    elBookModal.innerText = `
        Book's ID:    ${book.id}
        Book's title: ${book.title}
        Book's price: ${book.price}
        Book's rating: ${starRating(book.rating)}
        Book's cover: `
    
    elBookModal.innerHTML += `<img src="${book.imgUrl}" 
    alt="Book cover" width="200" height="300">`
    elBookModal.innerHTML += `</br><button onclick="hideModals()">Hide info</button>`
}

function starRating(rating) {
    let stars = ''
    for (let i = 0; i < rating; i++) {
        stars += '⭐'
    }
    return stars
}

function onUpdateBook(bookId) {
    console.log('Updating book', bookId)
    updateBook(bookId, prompt('Enter new price:'))
    render()
}

function onDeleteBook(bookId) {
    console.log('Deleting book', bookId)
    const bookTitle = deleteBook(bookId)
    deletedBookMsg(bookTitle)
    render()
}

function deletedBookMsg(title) {
    const elDeletedTitle = document.querySelector('.book-deleted-title')
    elDeletedTitle.innerText = title

    const elDeletedModal = document.querySelector('.book-deleted')
    elDeletedModal.style.display = 'block'

    setTimeout(hideModals, 2000)
}

function hideModals() {
    const elBookModal = document.querySelector('.book-modal')
    elBookModal.style.display = 'none'
    
    const elDeletedModal = document.querySelector('.book-deleted')
    elDeletedModal.style.display = 'none'
}

function onAddBook() {    
    var title = prompt('Enter the new book title:')
    while (!title) {
        title = prompt('Book title cannot be blank\nEnter the new book title:')
    }
    var price = prompt('Enter the new book price:')
    while (!price || (+price) < 0) {
        price = prompt('Price cannot be blank or negative\nEnter the new book price:')
    }
    
    var rating = prompt('Enter the new book rating:')
    while (rating < 1 || rating > 5) {
        rating = prompt('Rating need to be between 1 to 5\nEnter the new book rating:')
    }

    addBook(title, price, rating)
    render()
}

function onSetFilter(event) {
    event.preventDefault()
    var title = document.querySelector('.filter-title').value
    render(filterByTitle(title))
}

function onClearFilter(event) {    
    event.preventDefault()
    const elFilterTitle = document.querySelector('.filter-title')
    elFilterTitle.value = ''
    render()
}