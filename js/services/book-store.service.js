'use strict'

var gBooks

function getBooks() {
  gBooks = [
    _createBook('harry potter', 16),
    _createBook('lord of the rings', 23),
    _createBook('snow crush', 8)
  ]
  return gBooks
}



function readBook() {

}
function updateBook() {

}
function removeBook() {

}

function _createBook(title, price) {
  return {
    id: makeId(),
    title,
    price
  }
}