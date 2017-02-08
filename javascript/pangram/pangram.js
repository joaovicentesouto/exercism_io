var Pangram = function(word) {
  this.word = word.toLowerCase().replace(/[ ]/g, '');
};

Pangram.prototype.isPangram = function () {

  var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var localWord = this.word;

  return !alpha.some(letter => localWord.indexOf(letter) == -1);

};

module.exports = Pangram;
