var PhoneNumber = function(digits) {
    digits = this.rulesTest(digits.replace(/\D/g , ''));
    this.areaCodeOfNumber = this.subString(digits, 0, 2);
    this.firstPieceOfNumber = this.subString(digits, 3, 5);
    this.lastPieceOfNumber = this.subString(digits, 6, 9);
};

PhoneNumber.prototype.subString = function(string, firstIndex, lastIndex) {
  subString = '';
  for(firstIndex; firstIndex <= lastIndex; firstIndex++) {
    subString += string[firstIndex];
  }
  return subString;
};

PhoneNumber.prototype.rulesTest = function(digits) {
    return (digits.length<10 || digits.length>11 || (digits.length==11 && digits[0]!=1))?
           '0000000000' : digits.length==10 ? digits : this.subString(digits, 1, 10);
};

PhoneNumber.prototype.number = function() {
   return this.areaCodeOfNumber + this.firstPieceOfNumber + this.lastPieceOfNumber;
};

PhoneNumber.prototype.areaCode = function(areaCode) {
  return this.areaCodeOfNumber;
};

PhoneNumber.prototype.toString = function() {
  return `(${this.areaCodeOfNumber}) ${this.firstPieceOfNumber}-${this.lastPieceOfNumber}`;
};

module.exports = PhoneNumber;
