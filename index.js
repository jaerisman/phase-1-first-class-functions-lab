const returnFirstTwoDrivers = function(){
  let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']   
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(){
  let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];  
  return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fare){
    return function(fare){
        return fare * fare
    }
}

const fareDoubler = function(fare){
    return fare * 2
}

const fareTripler = function(fare){
    return fare * 3
}

function selectDifferentDrivers(drivers, func){
    if (func === returnFirstTwoDrivers){
        return drivers.slice(0,2);
    }  
    else if (func === returnLastTwoDrivers){
        return drivers.slice(2);
    }
}