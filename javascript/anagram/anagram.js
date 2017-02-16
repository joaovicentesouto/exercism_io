var Anagram = function(word) {
  this.baseWord = word;
};

Anagram.prototype.matches = function (arrayOfWords) {

  function logicForEachConstructor(baseWord, matches) {
    
    var originalBaseWord = baseWord.toLowerCase();
    var formattedBaseWord = originalBaseWord.split('').sort().join('');

    return function(currentWord) {
      var anagramPossible = currentWord.toLowerCase().split('').sort().join('');
      if(originalBaseWord != currentWord.toLowerCase() && formattedBaseWord == anagramPossible) {
          matches.push(currentWord);
      };
    };
  };

  if(typeof arrayOfWords === 'string') {
    arrayOfWords = Array.prototype.slice.call(arguments);
  };

  var matches = [];
  var logicForEach = logicForEachConstructor(this.baseWord, matches);
  arrayOfWords.forEach(logicForEach);

  return matches;
};

module.exports = Anagram;
