var Word = function() {};

Word.prototype.count = function(inputString) {

  function treatment(sentence) {
    var reg = /([.,*+?¿^=!¡:${}()%&@|\[\]\/\\\n\t])/gi;
    sentence = sentence.replace(reg, ' ');
    sentence = sentence.toLowerCase().trim();
    return sentence.split(' ');
  };

  function removesSideQuotes(word, index) {
    var reg = /^\'|\'$/g;
    arrayOfWords[index] = word.replace(reg, '');
  };

  function wordsCounter(word) {
    if(word == 'constructor') {
      response[word] = 1;
    } else if(response[word] === undefined) {
      if(word != '' || word != "") {
        response[word] = 1;
      };
    } else {
      response[word] += 1;
    };
  };

  var response = {};
  var arrayOfWords = treatment(inputString);
  arrayOfWords.forEach(removesSideQuotes);
  arrayOfWords.forEach(wordsCounter);
  return response;
};

module.exports = Word;
