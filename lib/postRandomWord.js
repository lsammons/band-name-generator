'use strict';

module.exports = function (word, wordObject) {
  if(!wordObject.hasOwnProperty(word)) {
    wordObject[word] = true;
    return {message: 'Thanks, we added your word: ' + word + ' to our list.'};
  }
    return {message: 'Sorry, we already have your word: ' + word + '. Please submit another word.'};
}
