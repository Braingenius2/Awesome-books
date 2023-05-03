// define books as a collection of arrays
let books = [
  {
    id: 1,
    title: 'Lorem',
    author: 'Testeroo Testyy',
  },
  {
    id: 2,
    title: 'Ipsum',
    author: 'Testeroo Testyy',
  },
  {
    id: 3,
    title: 'Dolor',
    author: 'Testeroo Testyy',
  },
];

// Get DOM elements
const bookListElement = document.getElementById('book-list');
const addButtonElement = document.getElementById('add-btn');
const titleInputElement = document.getElementById('title-input');
const authorInputElement = document.getElementById('author-input');

function addBook(title, author) {
  const book = {
    id: books.length + 1,
    title,
    author,
  };
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}

function removeBook(id) {
  books = books.filter((book) => book.id !== id);
  let localStorageBooks = JSON.parse(localStorage.getItem('books'));
  localStorageBooks = localStorageBooks.filter((obj) => obj.id !== parseInt(id, 10));
  localStorage.setItem('books', JSON.stringify(localStorageBooks));
}

function displayBookList() {
  // Clear the book list element
  bookListElement.innerHTML = '';

  // Loop through the book collection and create a new element for each book
  books.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `<p><span class="title">${book.title}</span><br><span class="author">${book.author}</span></p>`;
    bookElement.id = `book-${book.id}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.dataset.id = book.id;
    removeButton.addEventListener('click', (event) => {
      const { id } = event.target.dataset;
      removeBook(id);
      const bookElement = document.getElementById(`book-${id}`);
      bookListElement.removeChild(bookElement);
    });
    bookElement.appendChild(removeButton);
    bookListElement.appendChild(bookElement);
  });
}

// Check if there is any data in localStorage and load it
if (localStorage.getItem('books')) {
  books = JSON.parse(localStorage.getItem('books'));
}

// Event listener for the add book button
addButtonElement.addEventListener('click', (event) => {
  event.preventDefault();

  // Get the values from the input fields
  const title = titleInputElement.value;
  const author = authorInputElement.value;

  // Add the book to the collection
  addBook(title, author);

  // Clear the input fields
  titleInputElement.value = '';
  authorInputElement.value = '';

  // Display the updated book list
  displayBookList();
});

displayBookList();
