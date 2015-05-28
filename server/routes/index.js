var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auto_stats');


router.get("/*", function(request, respond, next){
    var file = request.params[0] || 'views/index.html';

    respond.sendFile(path.join(__dirname, '../public', file));
    //next();
});






module.exports = router;