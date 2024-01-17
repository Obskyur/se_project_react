/*═════╕
 │ API │
 ╘═════*/

import { apiKey } from "./constants.js";
import { handleResponse } from "./api.js";

export default function getWeather() {
  return getLocationPromise
    .then(coords => {
      const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&units=imperial&appid=${apiKey}`;

      return fetch(apiURL, { method: "GET" })
        .then(handleResponse);
    })
}

/*══════════╕
 │ LOCATION │
 ╘══════════*/
// Code courtesy of T.H.Naseri on stackoverflow:
// https://stackoverflow.com/questions/66245245/how-store-latitude-and-longitude-from-navigator-geolocation-getcurrentposition
let lat, long;
// Creating a promise out of the function
const getLocationPromise = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      // Resolving the values which I need
      resolve({ latitude: lat, longitude: long });
    });
  } else {
    reject("Your browser doesn't support geolocation API");
  }
});
