const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  const month = date.getMonth() +1
    if (month >= 1 && month < 3) return 'winter'
    if (month = 12) return 'winter'
    if (month > 2 && month < 6) return 'spring'
    if (month > 5 && month < 9) return 'summer'
    if (month > 8 && month < 12) return 'autumn'

};
