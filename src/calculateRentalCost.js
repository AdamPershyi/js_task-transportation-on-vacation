/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  const priceOfDay = 40;
  const shortDays = 3;
  const shortDaysDisc = 20;
  const longDays = 7;
  const longDaysDisc = 50;

  if (days >= shortDays && days < longDays) {
    return priceOfDay * days - shortDaysDisc;
  }

  if (days >= longDays) {
    return priceOfDay * days - longDaysDisc;
  }

  return days * priceOfDay;
}

module.exports = calculateRentalCost;
