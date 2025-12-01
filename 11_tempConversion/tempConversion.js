// from f to c: c = (f-32) / 1.8

const convertToCelsius = function(fT) {
  let long = (fT - 32)/1.8;
  let rounded = Math.round(long * 10)/10;
  return rounded;
  
  };
  
  // from c to f: f = c * 1.8 + 32
  
  const convertToFahrenheit = function(cT) {
      let long = cT * 1.8 + 32;
      let rounded = Math.round(long * 10)/10;
      return rounded;
  };

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
