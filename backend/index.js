import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';



const app = express();

//middleware for parsing request body
app.use(express.json());

app.use(cors());

//app.use(
//  cors({
//   origin: 'http://localhost:3000',
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//    allowedHeaders: ['Content-Type'],
//}));

app.get('/', (request,response) => {
  console.log(request)
  return response.status(234).send('Welcome to MERN Stack Tutorial');

});

app.use('/books', booksRoute);

//middleware for handling CORS policy

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App is successfully connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });

  })
  .catch((error) => {
    console.log(error);

  });


