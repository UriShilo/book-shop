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
    <td><button onclick="onReadBook('${book.id}')">Read</button></td>
    <td><button onclick="onUpdateBook('${book.id}')">Update</button></td>
    <td><button onclick="onRemoveBook('${book.id}')">Delete</button></td>
    </tr>`
  }).join('')

  const tbody = document.querySelector('tbody')
  tbody.innerHTML = strHTML
}

function onAddBook() {
  var title = prompt('book title:')
  var price = prompt('book price:')

  if (!title || !price) return

  addBook(title, price)
  renderBooks()
}

function onReadBook(bookId) {
  const book = getBookById(bookId)
  const elModal = document.querySelector('.modal')

  elModal.querySelector('h3').innerText = book.title
  elModal.querySelector('h4 span').innerText = book.price
  elModal.querySelector('p').innerText = book.description

  elModal.classList.add('open')

}

function onUpdateBook(bookId) {
  const price = +prompt('new price:')
  if (!price) return
  updateBook(bookId, price)
  renderBooks()
}

function onRemoveBook(bookId) {
  removeBook(bookId)
  renderBooks()
}

function onCloseModal() {
  document.querySelector('.modal').classList.remove('open')
}