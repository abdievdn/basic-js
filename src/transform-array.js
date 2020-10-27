const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let key = '';
	let index = 0;
  let check = '';
  
  let resArr = arr.slice();

	if (!Array.isArray(resArr)) throw new Error();

	while (index < resArr.length) {
		if (typeof resArr[index] === 'string') {
			key = resArr[index];
			switch (key) {
				case '--discard-next':
					resArr[index + 1] === null ? resArr : (delete resArr[index], delete resArr[index + 1]);
					break;
				case '--discard-prev':
					resArr[index - 1] === null ? resArr : (delete resArr[index], delete resArr[index - 1]);
					break;
				case '--double-next':
					resArr[index + 1] === null ? resArr : resArr[index] = resArr[index + 1];
					break;
				case '--double-prev':
					resArr[index - 1] === null ? resArr : resArr[index] = resArr[index - 1];
					break;
				default:
					break;
			}
		}
		index++;
	}	

	for (let i = 0; i < resArr.length; i++) {
		if (resArr[i] === undefined) {
			resArr.splice(i, 1);
			i--;
		}
	}

	return resArr;
};
