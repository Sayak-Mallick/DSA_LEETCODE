/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    // Define a mapping of Roman numerals to their integer values
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' },
    ];

    let result = '';

    // Iterate over the Roman numerals in descending order of value
    for (const numeral of romanNumerals) {
        // While the input number is greater than or equal to the current numeral's value
        while (num >= numeral.value) {
            // Subtract the numeral's value from the input number
            num -= numeral.value;
            // Append the numeral's symbol to the result
            result += numeral.symbol;
        }
    }

    return result;
};