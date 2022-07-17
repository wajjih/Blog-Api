const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const bcrypt = require('bcrypt')

require('dotenv').config();

const PORT = process.env.PORT || 3000;


const mongoConfig = require('./config/mongoConfig');


const authRouter = require('./Route/authRouter')
const userRouter = require('./Route/userRouter');
const blogRouter = require('./Route/blogRouter');

const app = express();
app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));


app.use('/User', userRouter);
app.use('/Auth', authRouter)

app.get('/', (req,res) => {
    res.status(200).json({message: 'Welcome to API'})
})

app.listen(PORT, () => { 
    console.log(`Server is running on ${PORT}`);
    mongoConfig();
})