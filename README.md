
The CrossFlex Ultimate Daily Workout app encourages the healthy habit of daily exercise through gamification! 

It also takes the guesswork out of exercise by providing three exercises for you to complete each day.

---
## Screenshot

![reading-list-full-stack-app](https://user-images.githubusercontent.com/86321333/189157558-a684a07c-dc1c-4bbf-8515-e996df623a00.png)


---
## How It Works:

The user can access the FREE app by simply clicking Signup and creating an account.

Once logged in, the user will see three exercises to perform that day. Each exercise will be worth 10 points. The user completes each exercise and clicks on the exercise name. This automatically adds the 10 points to both a daily score and a running score.

The user also has the option to manually enter a fourth exercise of their choosing, to earn even more points!

*The points act as a visual representation of your consistency with the daily exercises, as well as gives you an incentive to drive those points as high as they can go!*

---

> Link to project: https://crossflex.herokuapp.com

---

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, MongoDB, Heroku

- Packages/ Dependencies used: bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator

---

## Who is this for?

Total beginners, workout aficionados, and everyone in between! 

If you want to improve your health through exercise, this app is for you.



---

## Optimizations

With the next update, we aim to implement a leaderboard function whereby logged-in users can see a leaderboard, ranking the users with the most points at the top.

---

## Lessons Learned:

1. While working with both the moment module and the MongoDB Atlas service, we encountered a bug where users could not log in based on their respective time zones. Resolved by making sure the time noted in the database read 2022-09-05T00]:00:00.000+00:00 instead of 2022-09-05T04:00:00.000+00:00.


##If you want to check it out make sure to:

1. npm install
2. Make a database (MongoDB) and ad DB_STRING to .env file
