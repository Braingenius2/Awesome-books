// define books as a collection of arrays
let books=[
  {
    title:'Lorem',
    author:'Testeroo Testyy',
  },
  {
    title:'Lorem',
    author:'Testeroo Testyy',
  },
  {
    title:'Lorem',
    author:'Testeroo Testyy',
  }
]

// Get DOM elements
const bookListElement = document.getElementById("book-list");
const addBookElement = document.getElementById("add-book");
const addButtonElement = document.getElementById("add-btn");
const removeButtonElement = document.getElementById("remove-btn");
const titleInputElement = document.getElementById("title-input");
const authorInputElement = document.getElementById("author-input");

// const title=document.getElementById('title-input').value
// const author=document.getElementById('title-input').value

function addBook(title, author) {
  const book = {
    title: title,
    author: author,
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
}

function removeBook(title, author){
  const books = books.filter(function(value){
    if(value[title]!==title && value[author]!==author){
    return value;
    }
    localStorage.setItem("books", JSON.stringify(books));
  });

}

function displayBookList() {
  // Clear the book list element
  bookListElement.innerHTML = "";

  // Loop through the book collection and create a new element for each book
  books.forEach(function (book, index) {
    const bookElement = document.createElement("div");
    bookElement.innerHTML = `<p><span class="title">${book.title}</span><br><span class="author">${book.author}</span></p>`;

    // set custom data-index attribute on the div element using its dataset property
    // assign the index of the current book object to it
    // This data-index attribute is used to keep track of the index of each book in the book list, so that the correct book can be removed when the user clicks the "Remove" button.
    bookElement.dataset.index = index;
    bookListElement.appendChild(bookElement);
  });
}

// Check if there is any data in localStorage and load it
if (localStorage.getItem("books")) {
  books = JSON.parse(localStorage.getItem("books"));
}

// Event listener for the add book button
addButtonElement.addEventListener("click", function (event) {
  event.preventDefault();
  
  // Get the values from the input fields
  const title = titleInputElement.value;
  const author = authorInputElement.value;

  // Add the book to the collection
  addBook(title, author);

  // Clear the input fields
  titleInputElement.value = "";
  authorInputElement.value = "";

  // Display the updated book list
  displayBookList();
});
  
// Event listener for the remove book button
removeButtonElement.addEventListener("click", function () {
  // invoke the removebook function
  removeBook();

  // Display the updated book list
  displayBookList();
});

displayBookList();