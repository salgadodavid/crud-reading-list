const deleteBtn = document.querySelectorAll('.fa-trash')  // imports delete button by class of fa-trash
const book = document.querySelectorAll('.item span.incomplete') //imports item by class of 
const bookRead = document.querySelectorAll('.item span.completed')

Array.from(deleteBtn).forEach((element)=>{
    element.addEventListener('click', deleteBook)
})

Array.from(book).forEach((element)=>{  //creates a new event listener for every item in the todo
    element.addEventListener('click', markRead) //on click, it runs the markComplete function
})

Array.from(bookRead).forEach((element)=>{ //Creates a new event listener for every item marked as completed in the todo
    element.addEventListener('click', markUnread)// on click, it runs the markUncomplete function
})

async function deleteBook(){  //function that deletes item 
    const bookId = this.parentNode.dataset.id// grabs the value (inner text) of the item clicked for deletion
    try{
        const response = await fetch('deleteBook', { //makes a fetch request
            method: 'delete',   //delete request
            headers: {'Content-Type': 'application/json'}, //content of request in json
            body: JSON.stringify({
              'bookFromJS': bookId  // value of deleted item is now stored in the itemFromJS property
            })
          })
        const data = await response.json() //waits for response and converts it to json
        console.log(data)//console logs the response
        location.reload()  // reloads page so that it makes a get request and gets the most up to date site

    }catch(err){
        console.log(err) //handles errors
    }
}

async function markRead(){  //mark complete function
    const bookId = this.parentNode.dataset.id  // gets value of item that is marked as completed
    try{
        const response = await fetch('markRead', { //makes fetch request to server
            method: 'put', //defines the type of request to be a put
            headers: {'Content-Type': 'application/json'}, // establishe that content is in json format
            body: JSON.stringify({
                'bookFromJS': bookId // value of deleted item is now stored in the itemFromJS property
            })
          })
        const data = await response.json() //transforms response to json 
        console.log(data) //logs the response
        location.reload() // reloads page and makes new get request to reflect changes

    }catch(err){
        console.log(err)//handles errors
    }
}

async function markUnread(){ //uncomplete function
    const bookId = this.parentNode.dataset.id // sets value of item to itemText
    try{
        const response = await fetch('markUnread', { // makes fetch request
            method: 'put', //request is put (update)
            headers: {'Content-Type': 'application/json'},// tell server request is in json format
            body: JSON.stringify({
                'bookFromJS': bookId // value of deleted item is now stored in the itemFromJS property
            })
          })
        const data = await response.json()//converts response to json
        console.log(data)// logs the response
        location.reload()// reloads page to reflect changes

    }catch(err){
        console.log(err)//handles errors
    }
}