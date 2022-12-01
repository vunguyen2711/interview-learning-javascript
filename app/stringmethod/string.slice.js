//* extracts a part of a string and returns the extracted part in a new string.
//* The method takes 2 parameters: start position, and end position (end not included). => Có nghĩa là không bao gồm điểm kết thúc, là index trước end index.

const str = "The quick brown fox jumps over the lazy dog.";
const newString = str.slice(10, 15);
console.log(newString, str);
