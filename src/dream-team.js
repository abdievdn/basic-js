const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let result = [];

  if (!Array.isArray(members) || members.length === null) return false;
  members.forEach(element => { 
    if (typeof element === 'string') result.push(element.trim().substr(0, 1).toUpperCase())
  });
 
  return result.sort().join('');
};
