const bookListElement = document.getElementById('book-list');
const addButtonElement = document.getElementById('add-btn');
const titleInputElement = document.getElementById('title-input');
const authorInputElement = document.getElementById('author-input');
const listLink = document.querySelector('.list-link');
const addLink = document.querySelector('.add-link');
const contactLink = document.querySelector('.contact-link');
const formElement = document.getElementById('form');
const contactElement = document.getElementById('contact');
const dateTime = document.querySelector('.date-time');

const today = new Date();
const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
const vardateTime = `${date} ${time}`;
dateTime.innerHTML = `${vardateTime}`;
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
    bookListElement.innerHTML = '<h2>All Awesome books</h2>';
    const booksContainer = document.createElement('div');
    booksContainer.id = 'booksContainer';
    // Loop through the book collection and create a new element for each book
    this.books.forEach((book) => {
      const bookElement = document.createElement('div');
      bookElement.innerHTML = `<p><span class="title">"${book.title}" by </span><span class="author">${book.author}</span></p>`;
      bookElement.id = `book-${book.id}`;
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.dataset.id = book.id;
      removeButton.addEventListener('click', (event) => {
        const { id } = event.target.dataset;
        this.removeBook(id);
        const bookElement = document.getElementById(`book-${id}`);
        booksContainer.removeChild(bookElement);
      });
      bookElement.appendChild(removeButton);
      booksContainer.appendChild(bookElement);
      bookListElement.appendChild(booksContainer);
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

// Event listeners for links on nav menu
listLink.addEventListener('click', () => {
  bookListElement.style.display = 'flex';
  formElement.style.display = 'none';
  contactElement.style.display = 'none';
});

addLink.addEventListener('click', () => {
  bookListElement.style.display = 'none';
  formElement.style.display = 'flex';
  contactElement.style.display = 'none';
});

contactLink.addEventListener('click', () => {
  bookListElement.style.display = 'none';
  formElement.style.display = 'none';
  contactElement.style.display = 'flex';
});