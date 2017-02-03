var Isogram = function(word) {
  this.word = word;
};

Isogram.prototype.isIsogram = function () {

  function convertingToArray(word) {
    word = word.toLowerCase().replace(/[- ]/gi, '');
    var letters = word.split('').sort();
    return letters;
  };

  function twoLettersAlikeFollowed(letter, index, letters) {
    return letter == letters[index+1];
  };

  var response = true;
  var letters = convertingToArray(this.word);
  response = !letters.some(twoLettersAlikeFollowed);
  return response;
  
};

module.exports = Isogram;
