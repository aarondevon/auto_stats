var express = require('express');
var app = express();
var index = require('./routes/index');
app.use("/", index);


var server = app.listen(3000, function(){
   var port = server.address().port;
    console.log("I hear things on port: ", port);
});

module.exports = app;