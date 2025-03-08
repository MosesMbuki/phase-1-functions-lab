// 1. distanceFromHqInBlocks
function distanceFromHqInBlocks(block) {
    const hqLocation = 42;
    return Math.abs(block - hqLocation);
  }
  
  // 2. distanceFromHqInFeet
  function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    return blocks * 264;
  }
  
  // 3. distanceTravelledInFeet
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264;
  }
  
  // 4. calculatesFarePrice
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return "cannot travel that far";
    }
  }