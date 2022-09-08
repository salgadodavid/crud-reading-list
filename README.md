
The Reading List is fully functional CRUD Application that helps people get into the habit of reading.


---
## Screenshot

![reading-list-full-stack-app](https://user-images.githubusercontent.com/86321333/189157558-a684a07c-dc1c-4bbf-8515-e996df623a00.png)


---
## How It Works:

The user can access the FREE app by simply going to the link. 

The user can add the title and author of the books they are reading. The user can keep track of what they have read by clicking the toggle button, and they also have the ability to remove books from the list by clicking the delete button. 

---

> Link to project: coming soon

---

## How It's Made:

**Tech used:** Front-end: HTML, CSS, Bootstrap5, JavaScript. 
               Back-end:  Node.js, Express, EJS, MongoDB, Heroku

- Packages/ Dependencies used: bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

## Who is this for?

Students, readers, and people who want to build the habit of reading.



---

## Optimizations

Add Authentication:

With the next update, my goal is to implement authentication whereby logged-in will have predetermined reading-lists that they can keep track off. 

---

## Lessons Learned:

1. While working with both the moment module and the MongoDB Atlas service, we encountered a bug where users could not log in based on their respective time zones. Resolved by making sure the time noted in the database read 2022-09-05T00]:00:00.000+00:00 instead of 2022-09-05T04:00:00.000+00:00.


##If you want to check it out make sure to:

1. npm install
2. Make a database (MongoDB) and ad DB_STRING to .env file
