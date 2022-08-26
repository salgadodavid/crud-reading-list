const express = require('express') //Imports Express
const app = express() //Creates an Express app
const MongoClient = require('mongodb').MongoClient //Imports MongoDB
const PORT = 2121  // Defines Port
require('dotenv').config()// Allows for hidden variables/files

//Initiates DB
let db,  
    dbConnectionStr = process.env.DB_STRING,// declares the db by importing the function in the env file
    dbName = 'ReadingLists' // names the database
//Connects to Mongo database
MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true }) //connects the db 
    .then(client => {
        console.log(`Connected to ${dbName} Database`)//lets us know when the db is connected
        db = client.db(dbName)
    })
//Middleware     
app.set('view engine', 'ejs') //allows the view to use ejs
app.use(express.static('public')) // this is where our public (client) js/html/css files go
app.use(express.urlencoded({ extended: true })) // It parses incoming requests with urlencoded payloads
app.use(express.json())//Takes the object and turns it into JSON 

// API
app.get('/',async (request, response)=>{  //Determines what our api does when there is a client request for the Root
    const todoItems = await db.collection('Books').find().toArray() //waits for the database to find the todo collection and make an arr with all documents
    const itemsLeft = await db.collection('Books').countDocuments({completed: false})// counts number of documents that haven't been completed
    response.render('index.ejs', { items: todoItems, left: itemsLeft })//responds by rendering through ejs, all the num of items, and num left 
    // db.collection('todos').find().toArray()
    // .then(data => {
    //     db.collection('todos').countDocuments({completed: false})  const author = await db.collection('Books').find().toArray()
    //     .then(itemsLeft => {
    //         response.render('index.ejs', { items: data, left: itemsLeft })
    //     })
    // })
    // .catch(error => console.error(error))
})

app.post('/addBook', (request, response) => { //Create Requests
    db.collection('Books').insertOne({thing: request.body.bookTitle, Author: request.body.todoAuthor, completed: false})// Adds a new document to db based on form response
    .then(result => {
        console.log('Book Added') //tells us that storing the new document went ok
        response.redirect('/')//redirects/ refreshes root to display new doc added
    })
    .catch(error => console.error(error))// displays error in console in case there was one
})

app.put('/markRead', (request, response) => {    //UPDATE REQUEST for completed todo
    db.collection('Books').updateOne(
        {_id: request.body.bookFromJS},   // Finds todos db, and updates a document based on item id
        { $set: {completed: true } },   //sets the document's completed to true     
        {
          sort: {_id: -1},//sorts arr in descending order by id once a doc has been markes as completed
          upsert: false  //DOESN'T create a  new doc if it doesnt exist
        })
    .then(result => {
        console.log('I dont see it') //console log it's completed
        response.json('Marked Complete') //responds to the client (fetch request)
    })
    .catch(error => console.error(error))//displays error

})

app.put('/markUnread', (request, response) => { //request for undoing a todo that was marked as complete
    db.collection('Books').updateOne({_id: request.body.bookFromJS},{// goes to db and updates the doc based on form's body 
        $set: {
            completed: false //changes object's completed value to false
          }
    },{
        sort: {_id: -1}, //sorts arr in descending order by id once a doc has been markes as  uncompleted
        upsert: false // DOESN'T create a new doc if there wasn't any
    })
    .then(result => {
        console.log('Marked unread') //logs completed update
        response.json('Marked unRead') //responds to client (fetch) that update was completed 
    })
    .catch(error => console.error(error))//handels errors

})

app.delete('/deleteBook', (request, response) => { //Delete request
    db.collection('Books').deleteOne({ _id: request.body.bookFromJS}) //goes to db and finds doc based on name and deletes it
    .then(result => {
        console.log('Book Deleted') //displays deleted on console
        response.json('Book Deleted')    
    })
    .catch(error => console.error(error))// handles errors
})

app.listen(process.env.PORT || PORT, ()=>{ //sets our server on port established by us or host
    console.log(`Server running on port ${PORT}`) //console logs the port the server is running on
})