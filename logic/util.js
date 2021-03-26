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
    for (i = 0; i < totalPassengers.length - 1; i++) {
      sumPassengers += totalPassengers[i];
    }
    return sumPassengers;
 }

  return { calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers };
}

module.exports = Util();
