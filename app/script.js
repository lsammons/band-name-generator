'use strict';

// sends a GET request to our server
$(function() {
  $("#name").click(function() {
    // first argument is the route
    $.get('adjective', function(response) {
      console.log(response);
      var adjective = response.word;
      $("#adjective").text(adjective);
    }),
    $.get('noun', function(response) {
      console.log(response);
      var noun = response.word;
      $("#noun").text(noun);
    }),
    $.get('verb', function(response) {
      console.log(response);
      var verb = response.word;
      $("#verb").text(verb);
    })
  })
});

// sends a POST request to our server.
$('#submitWords').on('submit', function(e) {
  // jQ do not refresh page
  e.preventDefault();
  // ADJECTIVES
  // grab input from form
  var adjective = $('input[name=adjective]').val();
  // declare JSON object to be passed to back end
  var adjectivePost;
  // check to be sure input exists
  if (adjective) {
    adjectivePost = {word: adjective};
    // route, JSON object, function(response)
    $.post('adjective', adjectivePost, function(response) {
      //console.log(response);
      var adjectiveRes = response.message;
      $('#adjectiveRes').text(adjectiveRes);
    });
  }
  // NOUNS
  // grab input from form
  var noun = $('input[name=noun]').val();
  // declare JSON object to be passed to back end
  var nounPost;
  // check to be sure input exists
  if (noun) {
    nounPost = {word: noun};
    // route, JSON object, function(response)
    $.post('noun', nounPost, function(response) {
      //console.log(response);
      var nounRes = response.message;
      $('#nounRes').text(nounRes);
    });
  }
  // VERBS
  // grab input from form
  var verb = $('input[name=verb]').val();
  // declare JSON object to be passed to back end
  var verbPost;
  // check to be sure input exists
  if (verb) {
    verbPost = {word: verb};
    // route, JSON object, function(response)
    $.post('verb', verbPost, function(response) {
      //console.log(response);
      var verbRes = response.message;
      $('#verbRes').text(verbRes);
    });
  }
});















