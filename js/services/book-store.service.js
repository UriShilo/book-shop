'use strict'

const STORAGE_KEY = 'bookDB'

var gBooks

_createBooks()

function getBooks() {
  return gBooks
}



function addBook(title, price) {
  console.log(title, price)
  const book = _createBook(title, price)
  gBooks.push(book)
  saveToStorage(STORAGE_KEY, gBooks)

  return book

}

function readBook() {

}

function updateBook() {

}

function removeBook(bookId) {
  const bookIdx = gBooks.findIndex((book) => { book.id === bookId })
  const book = gBooks.splice(bookIdx, 1)
  saveToStorage(STORAGE_KEY, gBooks)
  return book
}




function _createBooks() {
  gBooks = loadFromStorage(STORAGE_KEY)
  if (gBooks && gBooks.length) return

  // If no books in storage - generate demo data

  gBooks = [
    _createBook('Harry Potter', 16),
    _createBook('Lord of the Rings', 23),
    _createBook('Snow Crush', 8)
  ]

  saveToStorage(STORAGE_KEY, gBooks)
}

function _createBook(title, price) {
  return {
    id: makeId(),
    title,
    price
  }
}