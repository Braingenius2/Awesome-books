 let books=[
    {
        title:'Lorem',
        author:'Testeroo Testyy'

    },
    {
        title:'Lorem',
        author:'Testeroo Testyy'

    },
    {
        title:'Lorem',
        author:'Testeroo Testyy'

    }
 ]
const title=document.getElementById('title-input').value
const author=document.getElementById('title-input').value
function addBook(){
    books.push({
    title:title,
    author:author
})
}
function removeBook(){
    let books=books.filter(function(value){
        if(value[title]!==title && value[author]!==author){
               return value;
        }
    })

}

function createBookList(books){
    books.forEach(element => {
        const bookList = document.createElement('section');
        const book = document.createElement('div');
        const paragraph = document.createElement('p');
        const title = document.createElement('span');
        title.classList.add('title');
        title.innerHTML = element[title];
        const breakLine = document.createElement('br');
        const author = document.createElement('span');
        author.classList.add('author');
        author.innerHTML = element[author];
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        const hr = document.createElement('hr');

        bookList.appendChild(book);
        book.appendChild(paragraph);
        paragraph.appendChild(title);
        paragraph.appendChild(breakLine);
        paragraph.appendChild(author);
        book.appendChild(removeButton);
    });
}

function displayBooks(){
    const main = document.querySelector('main');
    createBookList();
    main.appendChild()
    
}



displayBooks(books)