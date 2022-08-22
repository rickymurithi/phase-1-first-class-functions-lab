// Code!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(select) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(select) {
    return drivers.slice(2, 4);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier) {
    return function(fvalue) {
        return fareMultiplier * fvalue;
    }
}

const fareDoubler = (createFareMultiplier) => (createFareMultiplier)*2;

const fareTripler = (createFareMultiplier) => (createFareMultiplier)*3;

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}
    