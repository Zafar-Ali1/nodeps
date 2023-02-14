var express = require("express");
 
//use the application off of express.
var app = express();
var port=8080;

//define the route for "/"
app.get("/", function (request, response){
    //show this file when the "/" is requested
    response.sendFile(__dirname+"/index.html");
});

//start the server
app.listen(81);

console.log("Something awesome to happen at http://localhost:8080");
