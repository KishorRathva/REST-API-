//Import express
const express = require('express');
//Import routers 
const apiRouters = require("./api-routers");
//Import Body parser
const bodyParser = require('body-parser');
//Import Mongoose 
const mongoose = require('mongoose');
//Initialize the app
let app = express();
//setup server port
const port = process.env.PORT || 8080 ;
//Use API routers in the APP
app.use('/api',apiRouters);
//Configure bogyparser to handle post requests
app.use(bodyParser.urlencoded({extended : true }));
app.use(bodyParser.json());

//Connect to Mongoose and set connection variable 
mongoose.connect('mongodb://localhost/resthub');

var db = mongoose.connection;

//send message for default URL 

app.get('/',(req,res) => {
    res.send('Hello world with Express and nodemon');
});
//set default API response 
apiRouters.get('/',)
 

//Launch app to Listen to specified port

app.listen(port,() => {
    console.log(`Server running RestHub on port ${port}`);
});