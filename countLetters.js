/*
take in argument(s)
process argument as array of one character strings
function letterCount



*/


var args = process.argv.slice(2);

var charactersArr = args[0].split("");
var letterCountList = {}


function letterCount(charactersArr) {
  for (var i = 0; i < charactersArr.length; i++) {
    if (letterCountList[charactersArr[i]]) {
      letterCountList[charactersArr[i]]++;
    } else {
      letterCountList[charactersArr[i]] = 1;
    }
  }
}

letterCount(charactersArr);
console.log(letterCountList);