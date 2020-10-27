const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let month;

  if (date === undefined) return "Unable to determine the time of year!"; 
	if(Object.prototype.toString.call(date) !== "[object Date]") throw new Error();
  
	switch (true) {
		case ((date.getMonth() >= 0 && date.getMonth()) < 2 || date.getMonth() === 11):
			month = 'winter';
			break;
		case (date.getMonth() > 1 && date.getMonth() < 5):
			month = 'spring';
			break;
		case (date.getMonth() > 4 && date.getMonth() < 8):
			month = 'summer';
			break;
		case (date.getMonth() > 7 && date.getMonth() < 11):
			month = 'autumn';
			break;
		default:
      throw new Error();
	}
  return month;
};
