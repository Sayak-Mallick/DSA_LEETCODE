/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Initialize two pointers
  let left = 0;
  let right = s.length - 1;

  // Check if the string is a palindrome
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
