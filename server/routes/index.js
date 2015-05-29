var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auto_stats');

var MileItUp = mongoose.model('MileItUp', {test: Number});

router.post('/add', function(request, response, next){
    var kitty = new MileItUp({test: request.body.mileage});
    kitty.save(function(err){
        if(err) console.log('meow %s', err);
        response.send(kitty.toJSON());
        //next();
    });
});

router.get('/mpgdata', function(request, response, next){
    return Cat.find({}).exec(function(err, cats){
        if(err) throw new Error(err);
        response.send(JSON.stringify(cats));
        //next();
    });
});

router.get("/*", function(request, respond, next){
    var file = request.params[0] || 'views/index.html';

    respond.sendFile(path.join(__dirname, '../public', file));
    //next();
});






module.exports = router;