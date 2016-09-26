var express= require('express');
var app = express();
var bodyParser = require("body-parser");
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var bpJason = bodyParser.json();
var mongoose = require('mongoose');
var path = require('path');
var port = process.env.PORT || 4242;
var mongoURI = 'mongodb://localhost:27017/piHeroes';
mongoose.connect(mongoURI);
//for model
var heroes = require('../model/hero.js');


app.listen(port, function(){
  console.log('server up on port:', port);
});
// get all heroes
app.get('/all', urlencodedParser, bpJason, function(req, res){
  console.log('base url hit');
  heroes.find({}, function(err, results){
    if (err) {
      console.log(err);
    }else{
      res.send(results);
    }
  });
});
// add hero post
app.post('/addHero', urlencodedParser, bpJason, function(req, res){
  console.log('hit addHero post', req.body);
  // object from server
  var sentHero = req.body;
  // new document for collection furbabies
  var newHero = new heroes({
    alias: sentHero.alias,
    first_name: sentHero.first_name,
    last_name: sentHero.last_name,
    city: sentHero.city,
    power_name: sentHero.power_name
  });
  // save to database
  newHero.save(function(err){
    if(err){
    console.log('error:',err);
    res.sendStatus(500);
    }else{
      console.log('successfully created new pet');
      res.sendStatus(200);
  }
  });
});

// delete route
app.delete('/removeHero', urlencodedParser, bpJason, function(req, res){
  console.log('hit remove hero:', req.body);
  heroes.findByIdAndRemove(req.body.id, function(err, results){
    if(err){
      console.log('error:', err);
    }else{
      console.log('successfully sent on vacation');
      res.send(200);
    }
  });
});





app.get("/*", function(req,res){
    console.log("Here is the property: ", req.params[0]);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});
