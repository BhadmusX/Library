const newBook = document.createElement("button");
const container =  document.querySelector(".header-container");
const dialog = document.querySelector("dialog")
const bookform = document.querySelector("#book-form")
const close = document.querySelector(".close");
const submit = document.querySelector(".submit");

const myLibrary = [];

function Book(title, author, pages, isread) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
  
}

function addBookToLibrary(title, author, pages, isread) {
 let user = new Book(title, author, pages, isread);
 myLibrary.push(user);
  return user;   
}

bookform.addEventListener("submit", (event) => {

  event.preventDefault();

  const title = document.querySelector("#title").value;
  const author =  document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const isread = document.querySelector("#read").checked;

  addBookToLibrary(title, author, pages, isread);

  displaybooks();

  bookform.reset();
});



function displaybooks() {
 const bookcontainer = document.querySelector(".book-container");

bookcontainer.innerHTML = "";

myLibrary.forEach((book) => {
  const card = document.createElement('div');
  const title =  document.createElement("p");
  const author = document.createElement("p");
  const pages =  document.createElement("p");
  const btncontainer =  document.createElement("div");
  const removebtn = document.createElement("button");
  const readbtn  =  document.createElement("button");

    card.classList.add('card');
    btncontainer.classList.add("btncontainer");
    removebtn.classList.add("removebtn");
    readbtn.classList.add("readbtn");

    removebtn.textContent = "Remove";
    readbtn.textContent = "Read"
    author.textContent = book.author;
    title.textContent = `"${book.title}"`;
    pages.textContent = `${book.pages} pages`

    if(book.isread){
      readbtn.textContent = "Read";
      readbtn.classList.add("readbtn");
    }else{
      readbtn.textContent = "Not read"
       readbtn.classList.add("notreadbtn");
    }

    bookcontainer.appendChild(card);
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    btncontainer.appendChild(readbtn);
    btncontainer.appendChild(removebtn);
    card.appendChild(btncontainer);

})
}

newBook.textContent = "New Book";
newBook.classList.add("newbook")
container.appendChild(newBook);

newBook.addEventListener("click", () => {
  dialog.showModal()
});

submit.addEventListener("click", () => {
  dialog.close();
});
close.addEventListener("click", () => {
  dialog.close();
} )
