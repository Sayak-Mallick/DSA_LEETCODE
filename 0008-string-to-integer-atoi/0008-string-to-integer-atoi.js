/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
  const ans = Number.parseInt(s);
  return ans <= -2147483648 ? -2147483648 : ans >= 2147483647 ? 2147483647 : ans || 0;
};
