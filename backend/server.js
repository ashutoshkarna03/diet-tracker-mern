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
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});