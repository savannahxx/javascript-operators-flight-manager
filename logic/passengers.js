function Passengers() {
  function checkFlightCapacity(flightCapacity, passengerNumbers) {
    let totalPassengers = 0;

    for (i = 0; i < passengerNumbers.length; i++) {
      totalPassengers += passengerNumbers[i];
    }

    if (totalPassengers < flightCapacity) {
      return totalPassengers;
    } else { throw new Error(); }

  }

  function distributeAllSeatsToAllPassengers(numVIP, numRegular, numFlights, businessSeats, economySeats) {
    let passengerSeats = {vipPassengersWithBusinessSeats:0, vipPassengersWithEconomySeats:0, regularPassengersWithBusinessSeats:0, regularPassengersWithEconomySeats:0};

    let numBusinessSeats = numFlights * businessSeats;
    let numEconomySeats = numFlights * economySeats;
    while (numVIP > 0 && numBusinessSeats > 0) {
        passengerSeats.vipPassengersWithBusinessSeats++;
        numVIP--;
        numBusinessSeats--;
    }

    if (numVIP > 0) {
      while (numVIP > 0 && numEconomySeats > 0) {
        passengerSeats.vipPassengersWithEconomySeats++;
        numVIP--;
        numEconomySeats--;
      }
    }

    if (numBusinessSeats > 0) {
      while (numRegular > 0 && numBusinessSeats > 0) {
        passengerSeats.regularPassengersWithBusinessSeats++;
        numRegular--;
        numBusinessSeats--;
      }
    }

    if (numEconomySeats > 0) {
        while (numRegular > 0 && numEconomySeats > 0) {
          passengerSeats.regularPassengersWithEconomySeats++;
          numRegular--;
          numEconomySeats--;
        }
    }

    return passengerSeats;
  }

  return { checkFlightCapacity, distributeAllSeatsToAllPassengers };
}

module.exports = Passengers();
