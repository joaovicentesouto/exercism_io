var Word = function() {};

Word.prototype.count = function(inputString) {

  var re = /([.,*+?^=!:${}()%&@|\[\]\/\\])/gi;
  inputString = (inputString.replace(re, ' ')).trim();
  var arrayOfWords = inputString.split(' ');
  var response = {};

  function wordsCounter(word) {
    if(response[word] === undefined) {
      response[word] = 1;
    } else {
      response[word] += 1;
    };
  };

  arrayOfWords.forEach(wordsCounter);
  console.log(response);

  return response;
};

module.exports = Word;
