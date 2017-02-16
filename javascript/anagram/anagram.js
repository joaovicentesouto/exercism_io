var Anagram = function(word) {
  this.baseWord = word;
};

Anagram.prototype.matches = function (arrayOfWords) {

  function logicForEachConstructor(originalWord, formattedWord) {
    return function(currentWord) {
      var anagramPossible = currentWord.toLowerCase().split('').sort().join('');
      if(originalWord != currentWord.toLowerCase() && formattedWord == anagramPossible) {
          matches.push(currentWord);
      };
    };
  };

  if(typeof arrayOfWords === 'string') {
    arrayOfWords = Array.prototype.slice.call(arguments);
  };

  var matches = [];
  var originalBaseWord = this.baseWord.toLowerCase();
  var FormattedBaseWord = originalBaseWord.split('').sort().join('');

  var logicForEach = logicForEachConstructor(originalBaseWord, FormattedBaseWord);
  arrayOfWords.forEach(logicForEach);

  return matches;
};

module.exports = Anagram;
