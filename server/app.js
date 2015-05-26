var express = require('express');
var app = express();

app.get("/", function(request, respond){
    respond.send("I am here... I think.");
});

var server = app.listen(3000, function(){
   var port = server.address().port;
    console.log("I hear things on port: ", port);
});