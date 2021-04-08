function Util() {
  function calculateTotalDistributedPassengers(passengers) {
    let totalPassengers = 0;
    
    for (const typeOfPassenger in passengers) {
      totalPassengers += passengers[typeOfPassenger];
    }
    return totalPassengers;
  }

  function calculateTotalNumberOfPassengers(totalPassengers) {
    let sumPassengers = 0;
    for (i = 0; i < totalPassengers.length; i++) {
      sumPassengers += totalPassengers[i];
    }
    return sumPassengers;
  }

  function checkInput(input) {
    if (input.isEmpty() || Number.isNaN(input)) {
      throw new Error();
    }
  }
 
  function calculateTotalDistance(distances) {
    let totalDistance = 0;
    for (i = 0; i < distances.length; i++) {
      if (distances[i] > 0) {
        totalDistance += distances[i];
      }
    }
    return totalDistance;
  }

  function calculateBonusPoints(businessDistances, economyDistances, businessBonus, economyBonus) {
    let businessPoints = businessBonus / 100 * calculateTotalDistance(businessDistances);
    let economyPoints = economyBonus / 100 * calculateTotalDistance(economyDistances);
    return businessPoints + economyPoints;
  }

  return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints };
}

module.exports = Util();
