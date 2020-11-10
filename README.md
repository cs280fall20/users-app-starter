# Users App

A simple web application that allows a registered user to login and access their dashboard.
A new user shall register first before being able to login. 

## Routes

* GET `/` homepage which presents the login form and a link to registration page.
* GET `/register` the registration form.
* POST `/register` register (create and save) user in the database.
* POST `/login` check user's credentials and if ok redirect to dashboard.
* GET `/dashboard` the user's dashboard.
* POST `/logout` log user out and redirect to homepage.