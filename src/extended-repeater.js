const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

	let result = '';
	let resultAdd = '';

	if (typeof options.separator === 'undefined' || options.separator === '') options.separator = '+';
	if (typeof options.additionSeparator === 'undefined' || options.additionSeparator === '') options.additionSeparator = '|';
	if (typeof options.addition === 'undefined') options.addition = '';
	if (typeof options.repeatTimes === 'undefined') options.repeatTimes = 1;
	if (typeof options.additionRepeatTimes === 'undefined') options.additionRepeatTimes = 1;

	resultAdd = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes);
	result = (str + resultAdd.substring(0, resultAdd.length - options.additionSeparator.length) + options.separator).repeat(options.repeatTimes);

	return result.substring(0, result.length - options.separator.length);
};
  