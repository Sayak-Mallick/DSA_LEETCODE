let reverse = function(x) {
  let number = x.toString();
  let reverse = number.split('').reverse().join('');
  if (parseInt(reverse) > Math.pow(2,31) - 1) {
    return 0;
  }
  else {
    return parseInt(reverse) * Math.sign(x);
  }
}
