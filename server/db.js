const mongoose = require('mongoose');
mongoose.connect('mongodb://adrrak:chopin12@ds125342.mlab.com:25342/json-web-token', () =>{
    console.log('you are connected ! to the mongo db');
});