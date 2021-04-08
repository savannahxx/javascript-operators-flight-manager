function Prices() {
    function calculateFinalPrice(basePrice, variationPassenger, variationFlight) {
        let finalPrice = (basePrice + (variationPassenger / 100) * basePrice) 
                        + (variationFlight / 100) * (basePrice + (variationPassenger/100) * 100);
        
        return finalPrice.toFixed(2);
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType) {
        if (passengerType.toLowerCase() === "regular"
            && flightType.toLowerCase() === "economy") {
            basePrice = basePrice - basePrice * .05 - .03 * (basePrice - .05 * basePrice);
        }
        else if (passengerType.toLowerCase() === "regular"
                && flightType.toLowerCase() === "business") {
            basePrice = basePrice - basePrice * .05 + .10 * (basePrice - .05 * basePrice);
        }
        else if (passengerType.toLowerCase() === "vip"
                && flightType.toLowerCase() === "economy") {
            basePrice = basePrice + basePrice * .05 - .03 * (basePrice + .05 * basePrice);
        }
        else if (passengerType.toLowerCase() === "vip"
                && flightType.toLowerCase() === "business") {
            basePrice = basePrice + basePrice * .05 + .10 * (basePrice + .05 * basePrice);
        }

        return basePrice;
    }

    function calculateTotalFinalPrice(numSeats, passengerType, flightType, basePrice) {
        return numSeats * calculateDefaultFinalPrice(basePrice, passengerType, flightType);
    }

    return { calculateFinalPrice, calculateDefaultFinalPrice, calculateTotalFinalPrice };
}

module.exports = Prices();

