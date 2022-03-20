const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce(function(previousValue, currentValue) {
    console.log("Previous Value", previousValue)
    console.log("Current Value", currentValue)
    return previousValue + currentValue
},0)
 console.log(totalBatteries)