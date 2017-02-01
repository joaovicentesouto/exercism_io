var Gigasecond = function(firstDate) {
  this.birth = firstDate;
};

Gigasecond.prototype.date = function() {

  var gigaBirthday = new Date(this.birth.getTime() + 1e12);

  return gigaBirthday;
};

module.exports = Gigasecond;
