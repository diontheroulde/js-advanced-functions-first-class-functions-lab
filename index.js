// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };
  
  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];
  
  function createFareMultiplier(fareQuintupler) {
      return function (integer) {
          return fareQuintupler * integer;
      }
  }

  function fareDoubler(doubleFare) {
      return doubleFare * 2
  }

function fareTripler(tripleFare) {
    return tripleFare * 3
}

function selectDifferentDrivers (drivers, returnDrivers) {
    return returnDrivers (drivers)
}