var express = require('express');
var app = express();
var index = require('./routes/index');
var bodyParser = require('body-parser');



var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("What did you say port: ", port, "?");
});

app.use(bodyParser.json());
app.use("/", index);



module.exports = app;