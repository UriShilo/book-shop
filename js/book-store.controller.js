'use strict'



function onInit(){
  // getBooks()
  renderBooks()
  console.log(gBooks)

}

function renderBooks(){
  const strHTML = getBooks().map((book)=>{
    console.log(book)
    return `<tr>
    <td>${book.id}</td>
    <td>${book.title}</td>
    <td>$${book.price}</td>
    <td><button onclick="onRead(${book.id})">Read</button></td>
    <td><button onclick="onUpdate()">Update</button></td>
    <td><button onclick="onDelete()">Delete</button></td>
    </tr>`
  }).join('')

  const tbody = document.querySelector('tbody')
  tbody.innerHTML=strHTML
}

function onReadBook(){
// onReadBook(bookId)
// strHTML = <modal elements go here...>
// <h2>Book name<h/h2>
// <modal>

}
function onUpdateBook(){
  // updateRate(bookId, bookPrice)
}
function onRemoveBook(){
// removeBook(bookId)
// renderBooks()
}