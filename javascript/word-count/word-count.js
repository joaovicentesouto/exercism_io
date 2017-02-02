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
    if(response[word] === undefined) {
      if(word != '' || word != "") {
        if(word != "constructor") {
          response[word] = 1;
        } else {
          response["constructor"] = 1;
        };
      };
    } else {
      response[word] += 1;
    };
  };

  var response = {};
  var arrayOfWords = treatment(inputString);
  arrayOfWords.forEach(removesSideQuotes);
  arrayOfWords.forEach(wordsCounter);
  console.log(response);

  return response;
};

module.exports = Word;
