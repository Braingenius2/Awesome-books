const bookListElement = document.getElementById('book-list');
const addButtonElement = document.getElementById('add-btn');
const titleInputElement = document.getElementById('title-input');
const authorInputElement = document.getElementById('author-input');

class Books {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books') || '[]');
  }

  addBook(title, author) {
    const book = {
      id: this.books.length + 1,
      title,
      author,
    };
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    let localStorageBooks = JSON.parse(localStorage.getItem('books'));
    localStorageBooks = localStorageBooks.filter((obj) => obj.id !== parseInt(id, 10));
    localStorage.setItem('books', JSON.stringify(localStorageBooks));
  }

  displayBookList() {
    // Clear the book list element
    bookListElement.innerHTML = '';

    // Loop through the book collection and create a new element for each book
    this.books.forEach((book) => {
      const bookElement = document.createElement('div');
      bookElement.innerHTML = `<p><span class="title">${book.title}</span><br><span class="author">${book.author}</span></p>`;
      bookElement.id = `book-${book.id}`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.dataset.id = book.id;
      removeButton.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        this.removeBook(id);
        const bookElement = document.getElementById(`book-${id}`);
        bookListElement.removeChild(bookElement);
      });
      bookElement.appendChild(removeButton);
      bookListElement.appendChild(bookElement);
    });
  }
}

const booksObj = new Books();
booksObj.displayBookList();

// Event listener for the add book button
addButtonElement.addEventListener('click', (event) => {
  event.preventDefault();

  // Get the values from the input fields
  const title = titleInputElement.value;
  const author = authorInputElement.value;

  // Add the book to the collection
  booksObj.addBook(title, author);

  // Clear the input fields
  titleInputElement.value = '';
  authorInputElement.value = '';

  // Display the updated book list
  booksObj.displayBookList();
});
displayBookList();
