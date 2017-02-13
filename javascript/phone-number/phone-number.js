var PhoneNumber = function(digits) {
    digits = this.rulesTest(digits.replace(/\D/g , ''));
    this.areaCodeOfNumber = digits.substr(0, 3);
    this.firstPieceOfNumber = digits.substr(3, 3);
    this.lastPieceOfNumber = digits.substr(6, 4);
};

PhoneNumber.prototype.rulesTest = function(digits) {
  return digits.length<10 || digits.length>11 || (digits.length==11 && digits[0]!=1) ?
           '0000000000' : digits.length==10 ? digits : digits.substr(1, 10);
};

PhoneNumber.prototype.number = function() {
  return this.areaCodeOfNumber + this.firstPieceOfNumber + this.lastPieceOfNumber;
};

PhoneNumber.prototype.areaCode = function() {
  return this.areaCodeOfNumber;
};

PhoneNumber.prototype.toString = function() {
  return `(${this.areaCodeOfNumber}) ${this.firstPieceOfNumber}-${this.lastPieceOfNumber}`;
};

module.exports = PhoneNumber;
