// Code your solution in this file!

//returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

//scuberDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multi) {
    return function(fare) {
        return multi * fare
    }
}

const fareDoubler = function(createFareMultiplier) {
    return createFareMultiplier * 2
}

const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3
}

const selectDifferentDrivers = function(drivers, selection) {
    if (selection === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers)
    } else if (selection === returnLastTwoDrivers)
        return returnLastTwoDrivers(drivers)

}