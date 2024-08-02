/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let number  = x.toString();
  let reverse = number.split('').reverse().join('');
  return number === reverse;
};