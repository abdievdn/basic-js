const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let number = 0;
  matrix.flat().forEach(element => {
    if (element === '^^') number++;
  });
  
  return number;
};