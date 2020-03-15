/**
 * @param {string} s
 * @return {string}
 */
// const reverseWords = function(s) {
//   return s
//     .split(/\s/g)
//     .map(item =>
//       item
//         .split("")
//         .reverse()
//         .join(""),
//     )
//     .join(" ")
// }

const reverseWords = function(s) {
  return s
    .match(/[\w']+/g)
    .map(item =>
      item
        .split("")
        .reverse()
        .join(""),
    )
    .join(" ")
}

export default reverseWords
