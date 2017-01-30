var Bob = function() {};

Bob.prototype.hey = function (dialogue) {

  if(dialogue === dialogue.toUpperCase() && dialogue !== dialogue.toLowerCase()) {
    return 'Whoa, chill out!';

  } else if(dialogue.charAt(dialogue.length-1) === '?') {
    return 'Sure.';

  } else {
    var silence = true;
    for(var i = 0; i < dialogue.length; i++) {
      if(dialogue.charAt(i) !== ' ') {
        silence = false;
      };
    };
    return silence ? 'Fine. Be that way!' : 'Whatever.';
  };

};

module.exports = Bob;
