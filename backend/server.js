'use strict'

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

// init the app
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongodb connection
const connection = require('./connection')

// routes
const dietRouter = require('./routes/diet');
const usersRouter = require('./routes/users');

app.use('/diet', dietRouter);
app.use('/users', usersRouter);

// start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});