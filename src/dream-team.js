const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (members.length == 0 || !members) return false
  if (typeof members == 'number' || typeof members == 'boolean' || members === null || typeof members == 'undefined') return false
  const arr = [...members].filter(item => typeof item == 'string')
  const patt = /[a-zA-Z]/
   return arr.map(item => item.match(patt)).reduce((res, item) => res + item, '').toUpperCase().split('').sort().join('')

};
