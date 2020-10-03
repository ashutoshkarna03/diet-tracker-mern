const mongoose = require("mongoose");

let options = {
    keepAlive: true,
    reconnectTries: Number.MAX_VALUE, // try infinite times
    reconnectInterval: 1000,  //retry in every 1 sec
    useMongoClient: true
}

mongoose.connect(process.env.MONGODB_CONNECTION_STRING,
    options,
     function(err) {
    if(err) {
        console.log('Error in connection with mongodb and error is: '+err)
        throw err;
    }
    else { 
        console.log('Successfully connected to MongoDB Database!');
    }
});

module.exports = mongoose;