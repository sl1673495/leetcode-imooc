/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ');
};

export default reverseWords;
