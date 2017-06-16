/*

    https://www.codewars.com/kata/longest-palindrome
    Algorithm to find the longest substring of given string that is a palindrome,
    ie. "racecars" will return 7 as the longest palindrome is "racecar".

    Further optimisation possible
*/

//simple palindrome check
function checkPalindrome(str){
  let strLength = str.length;
  for (let i = 0; i<strLength/2; i++){
    if(str[i] !== str[strLength-1-i]){
      return false;
    }
  }
  return true;
}
//splits string into substrings, starting from largest. Checks if palindrome found on each iteration
function longestPalindrome(str){
  if(str === ""){return 0}
  let splitStr = str.split("");
  for (let i = splitStr.length; i >= 2; i--){
    let result = splitStr.map(function(a, b, c){
      return c.slice(b, b + i)
      .join("");})
      .slice(0, -i + 1);
    for (let j = 0; j<result.length; j++){
      if (checkPalindrome(result[j]) === true){return i}
    }      
  }
  return 1;
}
longestPalindrome("racecarsarecool") //outputs 7 from "racecar" palindrome












































