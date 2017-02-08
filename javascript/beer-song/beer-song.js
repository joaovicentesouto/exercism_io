var BeerSong = function () {};

BeerSong.prototype.verse = function (number) {
  var bottles = {};
  bottles.onTheWall = (number != 0? number : 'No more') +
                      (number != 1? ' bottles' : ' bottle');
  bottles.afterTakeOneDown = (number == 1? 'no more' : number == 0? 99 : number-1) +
                             (number-1 != 1? ' bottles' : ' bottle');
  bottles.stillHas = number != 0? `Take ${number != 1? 'one' : 'it'} down and pass it around` :
                                  'Go to the store and buy some more';

  return `${bottles.onTheWall} of beer on the wall, ${bottles.onTheWall.toLowerCase()} of beer.\n` +
         `${bottles.stillHas}, ${bottles.afterTakeOneDown} of beer on the wall.\n`;
};

BeerSong.prototype.sing = function (start, end=0) {
  var singing = '';
  for(var index = start; index >= end; index--)
    singing += this.verse(index) + (index != end? '\n' : '');
  return singing;
};

module.exports = BeerSong;
