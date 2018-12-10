function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue).map(function(person){
    return person.name
  });
}

function exactMatch(drivers, match) {
  key = Object.keys(match)
  value = match[key]
  debugger
  return result = drivers.filter(function(driver){
    return driver[key] === value;
  });
  return result
}

function exactMatchToList(drivers, match) {
  return exactMatch(drivers, match).map(function(driver){
    return driver.name;
  });
}
