var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auto_stats');


router.get("/", function(request, respond, next){
    respond.send("I am here... I think.");
    next();
});

var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log("I hear things on port: ", port);
});

module.exports = router;