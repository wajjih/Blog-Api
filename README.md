# Blogs API Project

## Features
* Blogs are Full CRUD entailing that the blogs can be created, read, updated and deleted
* Users can be registered, viewed, updated and deleted
* Users can login into the sytem at any time

## Environmental Variables
* MONGODB_URI
* SECRET_KEY

## Technology
* NodeJS Express
* Database is stored in MongoDB
* Testing Server with Postman
* Hosted on Heroku
* User Password is hashed using bcrypt
* user Authentication is perfromed using jsonwebtoken

**Dependencies that needs to be installed are the following**
* bcrypt
* dotenv
* express
* express-validator
* helmet
* jsonwebtoken
* mongoose
* morgan

## Run Locally
clone the project and install all dependencies using the following format: npm i "dependecy"

## Routes
**app.use('/Blog', blogRouter)- Blogs Router**
View public and private blogs, view non private blogs, create a new Blog, view specific blogs, modify your own blog, delete your own blog

**app.use('/User', userRouter);**
Get all users, modify a user's detail and delete a user

**app.use('/Auth', authRouter)**
create new user and hash password, login and provide validation session token

## Blogs Schema
* created_by: string, required
* created_at: date, required Default to current date
* blog_title: string, required
* blog_content: string, required

## User Schema
* username: string, required
* email: string, required
* birthday: date, required
* age: number
* password: string, required


