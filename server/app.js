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
// use static folder
app.use(express.static('public'));

app.listen(port, function(){
  console.log('server up on port:', port);
});







app.get("/*", function(req,res){
    console.log("Here is the property: ", req.params[0]);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});
