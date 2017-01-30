var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function (input) {
  var rna = '';

  for(var i = 0; i < input.length; i++) {
    switch (input.charAt(i)) {
      case 'C':
        rna += 'G';
        break;

      case 'G':
        rna += 'C';
        break;

      case 'A':
        rna += 'U';
        break;

      case 'T':
        rna += 'A';
        break;

      default:
        break;
    };
  };
  return rna;
};

module.exports = DnaTranscriber;
