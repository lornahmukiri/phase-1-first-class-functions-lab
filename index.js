// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers){
    return[drivers[drivers.length -2], drivers[drivers.length - 1]]
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = (integer) => {
    return function(fare){
        return fare * integer;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayofDrivers, driver){
    return driver(arrayofDrivers)
}