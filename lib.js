const myLibrary = [];

const properties = ["title", "author", "pages", "read"];

let buffer = [];

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  properties.forEach((element) => { 
    buffer.push(document.querySelector("#book_" + element).value);
  });
  myLibrary.push(new Book(...buffer));
  buffer = [];
  display.innerHTML = "";
  displayLibrary();
  dialog.close();
});

const display_button = document.querySelector("#display_library");
display_button.addEventListener("click", () => {
  display.innerHTML = "";
  displayLibrary()
 });

const dialog = document.querySelector("dialog");

const add_book_btn = document.querySelector("#add_book");
add_book_btn.addEventListener("click", () => {
  dialog.showModal();

});

const display = document.querySelector(".display");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLIbrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
}

function displayLibrary() {
  myLibrary.forEach((book) => {
    const info = document.createElement("div");
    displayBook(book, info);
    const button = document.createElement("button");
    button.textContent = "read?";
    button.addEventListener("click", () => {
      if (book.read == "read") {
        book.read = "unread";
      } else {
        book.read = "read";
      }
      info.textContent = "";
      displayBook(book, info);
    });
    const container = document.createElement("div");
    container.setAttribute("style", "place-self: center; display: flex; justify-content: center; flex-direction: column; align-items: center; height: 7vw; width: 7vw; border: 2px solid black; font-size: 1.4em; background-color: rgba(0, 0, 0, 0.5); backdrop-filter: blur(15px);" );
    container.appendChild(info);
    container.appendChild(button);
    display.appendChild(container);
  });
}

function displayBook(book, element) {
  for(property in book) {
    const div = document.createElement("div");
    div.textContent = property + ": " + book[property];
    const line = document.createElement("div");
    line.setAttribute("style", "height: 4px; width: 100%;");
    element.appendChild(div);
    element.appendChild(line);
  }
}


