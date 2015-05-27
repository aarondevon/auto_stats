var express = require('express');
var app = express();
var index = require('./routes/index');

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("I hear things on port: ", port);
});

app.use("/", index);

module.exports = app;