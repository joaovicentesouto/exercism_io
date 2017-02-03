var Isogram = function(word) {
  this.word = word.toLowerCase().replace(/[- ]/gi, '');
};

Isogram.prototype.isIsogram = function () {
  var isogram = true;

  for(var i = 0; i < this.word.length-1; i++) {
    if(isogram) {
      for(var j = i+1; j < this.word.length; j++) {
        if(this.word[i] == this.word[j]) {
          isogram = false;
          break;
        }
      }
    } else {
      break;
    }
  }

  return isogram;
};

module.exports = Isogram;
