let string = "the quick brown fox jumps over the lazy dog";
let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let object = {};
function letterCounter(sentence, letter) {
count = 0;
for (let i=0;i<sentence.length; i++) {
  if (sentence[i] === letter) {
    count ++
  }
}  
  return count;
}
for (let i=0;i<letters.length; i++) {
  object[letters[i]] = letterCounter(string, letters[i])
}
console.log(object)



// let match = string.match().length

// console.log(match);