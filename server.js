'use strict'
// put npm modules first in file
var express = require('express');
var bodyparser = require('body-parser');
var Adjective = require('./lib/adjective.js');
var Noun = require('./lib/noun.js');
var Verb = require('./lib/verb.js');
var getRandomWord = require('./lib/getRandomWord.js');
var postRandomWord = require('./lib/postRandomWord.js');
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({exptended: true}));
app.use(express.static(__dirname + '/app/'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// make an instance of that adjective object
var adjective = new Adjective();
// make an instance of that noun object
var noun = new Noun();
// make an instance of that verb object
var verb = new Verb();

// export a function as the interface for a module
app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.post('/adjective', function(req, res) {
  console.log(req.body);
  res.json(postRandomWord(req.body.word, adjective));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.post('/noun', function(req, res) {
  console.log(req.body);
  res.json(postRandomWord(req.body.word, noun));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.post('/verb', function(req, res) {
  console.log(req.body);
  res.json(postRandomWord(req.body.word, verb));
});

app.listen(port, function() {
  console.log('server started on port ' + port);
});
