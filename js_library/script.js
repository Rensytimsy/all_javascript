const book_title = document.getElementById("title")
const book_author = document.getElementById("author")
const book_pages = document.getElementById("pages")
const add_book_btn = document.getElementById("btn")


let Books = [];
function my_library(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function add_book(add_book_btn){
    add_book_btn.addEventListener("click", (e) => {
        let books_avail = new my_library(book_title.value, book_author.value, book_pages.value);

        Books.push(JSON.stringify(books_avail));
        document.getElementById("books_page").innerHTML = Books;
        book_title.value = ""
        book_author.value = ""
        book_pages.value = ""
        console.log(Books)
    });

}
add_book(add_book_btn);
