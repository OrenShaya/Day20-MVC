'use strict'

function onInit() {
    render()
}

/**
 * <tr>
        <td>The adventures of Lori Ipsi</td>
        <td>120</td>
        <td>
            <button> Read   </button> 
            <button> Update </button> 
            <button> Delete </button> 
        </td>
    </tr>
*/
/** <tr>
        <td>Kratos: The Atlas killer</td>
        <td>150</td>
        <td>
            <button> Read   </button> 
            <button> Update </button>
            <button> Delete </button>
        </td>
    </tr>
    <tr>
        <td>Zora: The Lost Hyrule Domain</td>
        <td>90</td>
        <td>
            <button> Read   </button> 
            <button> Update </button>
            <button> Delete </button>
        </td>
    </tr>
 */

function render() {
    const books = getBooks()
    const elBookTable = document.querySelector('.book-table')
    books.forEach(book => {
        elBookTable.innerHTML += 
        `<tr>
            <td>${book.title}</td>
            <td>${book.price}</td>
            <td>
                <button onclick="onRead(this)"> Read   </button> 
                <button onclick="onUpdate(this)"> Update </button> 
                <button onclick="onDelete(this)"> Delete </button> 
            </td>
        </tr>`
    })
}