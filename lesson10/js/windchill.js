const temp = document.getElementById('temp').innerHTML;
const windspeed = document.getElementById('windspeed').innerHTML;


let windchill = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * temp * Math.pow(windspeed, .16));
  if (temp <= 50 && windspeed > 3) {
     windchill = Math.round(windchill);
  } else {
     windchill = "N/A";
  }
document.getElementById('windchill').innerHTML = windchill;