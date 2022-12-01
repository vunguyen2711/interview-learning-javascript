//* A string can be converted to an array with the split() method:

const word = "nguyen tam trieu vu";
const newWordArr = word.split("");
const newWordArr1 = word.split(" ");
const newWordArr2 = word.split("|");
console.log(newWordArr); //*['n', 'g', 'u', 'y', 'e', 'n', ' ', 't', 'a', 'm', ' ', 't', 'r', 'i', 'e', 'u', ' ', 'v', 'u']
console.log(newWordArr1); //*['nguyen', 'tam', 'trieu', 'vu']
