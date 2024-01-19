// setting up an express server with mongodb, routing and error handling

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from'cookie-parser';// parse cookies in HTTP request
import path from 'path';
dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(() =>{
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.log(err);
});

const __dirname = path.resolve();// absolute path of working directory

const app=express();

app.use(express.json());// middleware

app.use(cookieParser());// middleware

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
// create routes (api endpoint routing)
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);


app.use(express.static(path.join(__dirname, '/client/dist')));// statis build output
// middleware
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client','dist', 'index.html'));
})// configure to serve index.html for any route that does not match the api routes

app.use((err,req,res,next) => {// generic error handling middleware to catch errors with status code and returns JSOn response wit error
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json ({
        success: false,
        statusCode,
        message,
    });
});