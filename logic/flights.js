function Flights() {
  function calculateNumberOfFlights(numPassengers, flightCapacity) {
    if (numPassengers < 0 || !(Number.isInteger(numPassengers))) {
      throw new Error("The number of passengers must be a positive integer value");
    }
    if (flightCapacity < 0 || !(Number.isInteger(flightCapacity))){
      throw new Error("The capacity of the flight must be a positive integer value");
    }

    let numFlights = 0;
    if (numPassengers % flightCapacity === 0) {
      numFlights = numPassengers / flightCapacity;
    }
    else {
      numFlights = numPassengers / flightCapacity + 1;
      numFlights = parseInt(numFlights, 10);
    }
    return numFlights;
  }

  function checkAircraftRevision(distanceLimit, distances) {
    let totalDistance = 0;
    for (i = 0; i < distances.length; i++) {
      totalDistance += distances[i];
    }
    
    if (totalDistance <= (distanceLimit / 2)) {
      return "The revision needs to be done within the next 3 months";
    }
    else if (totalDistance <= (distanceLimit * .75)) {
      return "The revision needs to be done within the next 2 months";
    }
    else if (totalDistance <= distanceLimit) {
      return "The revision needs to be done within the next month";
    }
    else if (totalDistance > distanceLimit) {
      throw new Error();
    }
  }

  return {calculateNumberOfFlights, checkAircraftRevision};
}

module.exports = Flights();
