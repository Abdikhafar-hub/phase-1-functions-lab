// Code your solution in this file!

function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        return distance-42;
    }else {
        return 42-distance;
    }
}
function distanceFromHqInFeet(distance) {
    const blocks = distanceFromHqInBlocks(distance);
    const feet = blocks*264;
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264; // Assuming 1 block = 264 feet
  
    // Calculate the absolute distance in blocks and convert to feet
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
  
    return distanceInFeet;
  }

  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264; // Assuming 1 block = 264 feet
    const freeDistance = 400; // First 400 feet are free
  
    // Calculate the absolute distance in feet
    const distance = Math.abs(destination - start) * feetPerBlock;
  
    if (distance <= freeDistance) {
      return 0; // Free sample for very short distances
    } else if (distance <= 2000) {
      // Calculate fare for distance between 401 and 2000 feet
      const chargeableDistance = distance - freeDistance;
      const fare = chargeableDistance * 0.02; // 2 cents per foot
      return parseFloat(fare.toFixed(2)); // Return fare rounded to 2 decimal places
    } else if (distance <= 2500) {
      return 25; // Flat fare of $25 for distances over 2000 feet but not exceeding 2500 feet
    } else {
      return 'cannot travel that far'; // Distance exceeds 2500 feet
    }
  }