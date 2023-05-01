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