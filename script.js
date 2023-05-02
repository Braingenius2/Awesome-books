let books = [
    {
      title: 'Lo',
      author: 'Testeroo Testyy'
    },
    {
      title: 'Lorem',
      author: 'Testeroo Testyy'
    },
    {
      title: 'Lorem',
      author: 'Testeroo Testyy'
    }
  ];
  
  function addBook() {
    const title = document.getElementById('title-input').value;
    const author = document.getElementById('author-input').value;
    books.push({
      title: title,
      author: author
    });
  }
  
  function removeBook() {
    books = books.filter(function(value) {
      if (value.title !== title && value.author !== author) {
        return value;
      }
    });
  }
  function display(){
  const main = document.querySelector('main');
  for(let i=0;i<books.length;i+=1){
    const b=books[i];
    //create contaiiner
    const bookContainer=document.createElement('div');
    bookContainer.classList.add('books');
    //create the elements
    const pTitle = document.createElement('p');
    pTitle.classList.add('book_Title')
        pTitle.textContent=b.title
    const breakLine = document.createElement('br');
    const pauthor = document.createElement('p');
      pauthor.classList.add('book_author')
      pauthor.textContent=b.author
    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-btn');
    removeButton.textContent = 'Remove'; 
    const hr = document.createElement('hr');
    bookContainer.appendChild(pTitle);
    bookContainer.appendChild(breakLine);
    bookContainer.appendChild(pauthor);
    bookContainer.appendChild(removeButton);
    bookContainer.appendChild(hr);
    //append to the parent element
    main.appendChild(bookContainer)
  
  }
}
display()

  /*
  function createBookList(books) {
    if (books !== undefined && books !== null) {
      books.forEach(element => {
        const bookList = document.createElement('section');
        const book = document.createElement('div');
        const paragraph = document.createElement('p');
        const title = document.createElement('span');
        title.classList.add('title');
        title.innerHTML = element.title;
        const breakLine = document.createElement('br');
        const author = document.createElement('span');
        author.classList.add('author');
        author.innerHTML = element.author;
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.textContent = 'Remove'; 
        const hr = document.createElement('hr');
  
        bookList.appendChild(book);
        book.appendChild(paragraph);
        paragraph.appendChild(title);
        paragraph.appendChild(breakLine);
        paragraph.appendChild(author);
        book.appendChild(removeButton);
      });
    }
  }
  
  function displayBooks() {
    const main = document.querySelector('main');
    createBookList(books); 
    main.appendChild(bookList);
  }
  
  displayBooks();
  */


  //local storage
  window.onload=function(){
    if(localStorage){
      // ADD event listner
      document.getElementById('add-book').addEventListener('input',()=>{
        //get value from form
         const formTitle=document.getElementById('title-input').value;
         const formAuthore=document.getElementById('author-input').value;
         // create an object
         const data={
          storedTitle:formTitle,
          storedAuthor:formAuthore,
         };
         //save the object in localstorage
         localStorage.setItem('key',JSON.stringify(data));
      });
    }
  }
  function getData(){
    //retrive the form
    const parseData=JSON.parse(localStorage.getItem('key'));
    if (parseData !== undefined && parseData !== null) {
      document.getElementById('title-input').value= parseData.storedTitle;
      document.getElementById('author-input').value= parseData.storedAuthor;
    }
  }
  getData()
 