//Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.

const str = "Swift";

function modifyString(str) {
  const strLength = str.length;
  const strLast = str.slice(strLength-3, strLength)
  console.log(strLast.concat(str, strLast))
  
}

modifyString(str)