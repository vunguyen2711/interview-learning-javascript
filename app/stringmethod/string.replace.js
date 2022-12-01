//* The replace() method replaces a specified value with another value in a string:
//*The replace() method does not change the string it is called on.
//*The replace() method returns a new string.
//*The replace() method replaces only the first match
//*If you want to replace all matches, use a regular expression with the /g flag set. See examples below.

const word = "ngaomocoffe";
const newWord = word.replace("coffe", "tea");
console.log(newWord); // ngaomotea

//*To replace case insensitive, use a regular expression with an /i flag (insensitive):
//*To replace all matches, use a regular expression with a /g flag (global match):

const nameOfRepeat = "holic is the holic coffee tea on HOLIC";
const newNameOfRepeat = nameOfRepeat.replace(/holic/gi, "ngaomo");
console.log(newNameOfRepeat);
