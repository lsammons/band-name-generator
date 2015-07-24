'use strict'

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/app/'));

app.get('/', function(req, res) {
  //res.send('Hello, World!');
  res.sendFile('index.html');
});

// make an adjective constructor function
var Adjective = function() {
  this.sleepy = true;
  this.crazy = true;
  this.superb = true;
  this.hungry = true;
  this.thirsty = true;
  this.psychedelic = true;
}

// make a noun constructor function
var Noun = function() {
  this.nun = true;
  this.mushroom = true;
  this.Rome = true;
  this.cat = true;
  this.ocean = true;
  this.fish = true;
}

// make a verb constructor function
var Verb = function() {
  this.yell = true;
  this.thrash = true;
  this.zoom = true;
  this.gather = true;
  this.hang = true;
  this.escape = true;
}

// make an instance of that adjective object
var adjective = new Adjective();
// make an instance of that noun object
var noun = new Noun();
// make an instance of that verb object
var verb = new Verb();

// make a word retrieval function
function getRandomWord(object) {
  // get all of those properties into an array -- use an object method
  var propArray = Object.keys(object);
  // pick a random one from the array
  var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
  // return that word in an object
  return {word: randomProp};
  // word does not need to be in quotes
  // because Express converts it to JSON
  // because you need to be able to send JSON to the front end.
}

// export a function as the interface for a module.
app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});



app.listen(port, function() {
  console.log('server started on port ' + port);
});


