(function() {
'use strict';
function minimum(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}


function whyRecurse(num) {
  num = Math.abs(num);
  if (num === 0) {
    return true;
  }
  if (num === 1) {
    return false;
  }
  num -= 2;
  return whyRecurse(num);
}




function countBs(string, letter) {
  var counter = 0;
  for (var i = 0; i < string.length; i++) {
    if(string[i] === letter) {
      counter ++;
    }
  }
 return(`there are ${counter} ${letter}\'s`);
}



})();
