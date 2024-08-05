/**
 * @param {number} celsius
 * @return {number[]}
 */
const convertTemperature = (celsius) => {
    let kelvin = (celsius + 273.15).toFixed(5);
    let fahrenheit = (celsius * 1.80 + 32.00).toFixed(5);
    return ([kelvin, fahrenheit]);
};