
function countLetters(sentence){
  var lettersOccuring = {};
  var noSpaces = sentence.split(" ").join("").toLowerCase();
  for(var character of noSpaces){
    if (lettersOccuring[character] === undefined){
      lettersOccuring[character] = 1
    }
    else{
      lettersOccuring[character] += 1;
    }
  }
  return lettersOccuring;
}

console.log(countLetters("lighthouse in the house"));