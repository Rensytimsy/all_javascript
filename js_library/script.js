const book_title = document.getElementById("title")
const book_author = document.getElementById("author")
const book_pages = document.getElementById("pages")
const add_book_btn = document.getElementById("btn")
const books_display_page = document.getElementById("books_page");
// console.log(books_display_page);


const all_books = [];
function Books(title, author, pages){
  this.title = book_title.value;
  this.author = book_author.value;
  this.pages = book_pages.value;
}
// const new_book = new Books((book_title, book_author, book_pages));

function add_book(){
const new_book = new Books((book_title, book_author, book_pages));
all_books.push(new_book);
let is_read = document.createElement("button");
is_read.innerText = "not read";

let allBooksHTML = "";
all_books.forEach((book) => {
  allBooksHTML += `<div class="book_card">
  <p class="book_title">${book.title}</p> 
  <p class= "book_author">${book.author}</p> 
  <p class = "book_pages">${book.pages}</p>
  <button id="is_read">Read</button>
  </div>`;
});
books_display_page.innerHTML = allBooksHTML;
console.log(all_books);
}

let del_btn = document.createElement("button");
del_btn.textContent = "del"
del_btn.addEventListener("click", (e) => {
  all_books.forEach((b) => {
    if(b.title == b.title){
      b.filter((books) => books.title != books.title);
    }
  });
  console.log("About to delete a book");
});

add_book_btn.addEventListener("click", (e) => {
  add_book();
  book_title.value = " ";
  book_author.value = " ";
  book_pages.value = " ";
});
console.log(all_books);
