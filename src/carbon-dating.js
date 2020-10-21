const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== '') return false;
  if (parseFloat(sampleActivity) > 1 && parseFloat(sampleActivity) < 15) {
    return parseFloat(Math.log((MODERN_ACTIVITY / sampleActivity) / (Math.log(2) / HALF_LIFE_PERIOD)));
  }
  else return false;

};
