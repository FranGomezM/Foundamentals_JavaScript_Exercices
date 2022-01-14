const ftoc = function(temp) {
  let fahr = (temp-32) * (5/9);
  fahr *= 10;
  fahr = Math.round(fahr);
  fahr /= 10;
  return fahr;
};

const ctof = function(temp) {
  let celsius = temp * (9/5) + 32;
  celsius *= 10;
  celsius = Math.round(celsius);
  celsius /= 10;
  return celsius;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
