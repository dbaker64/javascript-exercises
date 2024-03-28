const convertToCelsius = function(input) {
  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  let output = (input - 32) * (5/9);
  output = round(output,1);
  return output;
};

const convertToFahrenheit = function(input) {
  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  let output = (input * (9/5)) + 32;
  output = round(output,1);
  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
