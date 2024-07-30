const isPalindrome = (x) => {
  let number  = x.toString();
  let reverse = number.split('').reverse().join('');
  return number === reverse;
}
