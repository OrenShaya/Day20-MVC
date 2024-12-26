'use strict'

function onInit() {
    render()
}

function render() {
    const books = getBooks()
    const elBookList = document.querySelector('.book-table')
    var strHtmls = '<tr>\n' +
            '<th>Title</th>\n' +
            '<th>Price</th>\n' +
            '<th>Actions</th>\n' +
            '</tr>'
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
    elBookList.innerHTML = strHtmls
}

function onReadBook(bookId) {
    console.log('Reading book', bookId)

    render()
}

function onUpdateBook(bookId) {
    console.log('Updating book', bookId)
    updateBook(bookId, prompt('Enter new price:'))
    render()
}

function onDeleteBook(bookId) {
    console.log('Deleting book', bookId)
    deleteBook(bookId)
    render()
}