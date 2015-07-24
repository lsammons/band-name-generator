'use strict';

$(function() {
  $("#name").click(function() {
    // your syntax of the day: AJAX
    // go ask the server for the info for me.
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













