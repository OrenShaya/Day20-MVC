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
        Book's cover: `
    
    elBookModal.innerHTML += `<img src="${book.imgUrl}" 
    alt="Book cover" width="200" height="300">`
    elBookModal.innerHTML += `</br><button onclick="hideModals()">Hide info</button>`
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

    // setTimeout(hideModals, 2000)
}

function hideModals() {
    const elBookModal = document.querySelector('.book-modal')
    elBookModal.style.display = 'none'
    
    const elDeletedModal = document.querySelector('.book-deleted')
    elDeletedModal.style.display = 'none'
}

function onAddBook() {    
    var title = prompt('Enter the new book title:')    
    var price = prompt('Enter the new book price:')

    addBook(title, price)
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