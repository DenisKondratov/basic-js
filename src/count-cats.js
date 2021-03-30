const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = []
  for (let key of matrix) {
    for (let i = 0; i < key.length; i++) {
      if (key[i] == '^^') arr.push(key[i])
    }
  }
  return arr.length
};
