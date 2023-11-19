'use strict'



function onInit() {
  // getBooks()
  renderBooks()
  // console.log(gBooks)

}

function renderBooks() {
  const strHTML = getBooks().map((book) => {
    // console.log(book)
    return `<tr>
    <td>${book.id}</td>
    <td>${book.title}</td>
    <td>$${book.price}</td>
    <td><button onclick="onRead('${book.id}')">Read</button></td>
    <td><button onclick="onUpdate('${book.id}')">Update</button></td>
    <td><button onclick="onRemoveBook('${book.id}')">Delete</button></td>
    </tr>`
  }).join('')

  const tbody = document.querySelector('tbody')
  tbody.innerHTML = strHTML
}

function onAddBook() {
  var title = prompt('book title:')
  var price = prompt('book price:')

if(!title || !price)return

  addBook(title, price)
  renderBooks()
}

function onReadBook() {
  // onReadBook(bookId)
  // strHTML = <modal elements go here...>
  // <h2>Book name<h/h2>
  // <modal>

}
function onUpdateBook() {
  // updateRate(bookId, bookPrice)
}
function onRemoveBook(bookId) {
  removeBook(bookId)
  renderBooks()
}