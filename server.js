const express = require('express');
const app = express();
const port = 8888
app.listen(8888,function(){
    console.log("Server is running on port" +{port});
});
// app.get('/', (req, res) => res.send('Hello Worl'));
app.get('/', function(req, res){
    res.send(fvalue);
} );
app.get('/about', function(req, res){
    res.send("Flying");
} );
app.get('/hobbies', function(req, res){
    res.send("eat,sleep");
} );
var fvalue = {lyrics: "Helloooo dude"};