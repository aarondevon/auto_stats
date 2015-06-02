var express = require('express');
var router = express.Router();
var path = require('path');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/auto_stats');

var MileItUp = mongoose.model('MileItUp', {mileage: Number, name: String, mpg: String});

router.post('/add', function(request, response, next){
    var car = new MileItUp({mileage: request.body.mileage, mpg: request.body.mpg});
    console.log(request.body);
    car.save(function(err){
        if(err) console.log('Failed to add car', err);
        response.send(car.toJSON());
        //next();
    });
});

router.get('/mpgdata', function(request, response, next){
    return MileItUp.find({}).exec(function(err, data){
        if(err) throw new Error(err);
        response.send(JSON.stringify(data));
        //next();
    });
});

router.get("/*", function(request, respond, next){
    var file = request.params[0] || 'views/index.html';

    respond.sendFile(path.join(__dirname, '../public', file));
    //next();
});






module.exports = router;