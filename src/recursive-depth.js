const CustomError = require("../extensions/custom-error");

module.exports = 
class DepthCalculator {

  count = 1;

  calculateDepth (arr) {
    
    if (arr === 'undefined' || Array.isArray(arr) === false) return 0;
    let flag = true;
    let i = 0;
    let count = 1;
      while (arr.length >= i) {
        if (Array.isArray(arr[i]) === true) {
          arr = arr.flat();
          this.count = this.count + 1;
          flag = true;
          break;
        } else flag = false;
        i++;
      }
      if (flag !== false) return this.calculateDepth(arr)
      else count = this.count;
      this.count = 1;
      return count;
   
  }
  
}
