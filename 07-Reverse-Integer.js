const reverse = (x) => {
  let number = x.toString().split("").reverse().join("");
  if(number.includes("-")) {
    number = parseInt(number) * -1;
    return number < Math.pow(-2, 31) ? 0 : number;
  }
  else {
    number = parseInt(number);
    return number > Math.pow(2, 31) - 1 ? 0 : number;
  }
}

console.log(reverse(123));
