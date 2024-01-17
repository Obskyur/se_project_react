

/*═════════╕
 │ WEATHER │
 ╘═════════*/
export const apiKey = "f9947ac1032d47548b9809217773d9ef";
export const weatherOptions = [
  { url: require("../images/conditions/day-clear.svg").default, day: true, type: "Clear" },
  { url: require("../images/conditions/day-cloudy.svg").default, day: true, type: "Clouds" },
  { url: require("../images/conditions/day-rain.svg").default, day: true, type: "Rain" },
  { url: require("../images/conditions/day-storm.svg").default, day: true, type: "Thunderstorm" },
  { url: require("../images/conditions/day-snow.svg").default, day: true, type: "Snow" },
  { url: require("../images/conditions/day-fog.svg").default, day: true, type: "Fog" },
  { url: require("../images/conditions/night-clear.svg").default, day: false, type: "Clear" },
  { url: require("../images/conditions/night-cloudy.svg").default, day: false, type: "Clouds" },
  { url: require("../images/conditions/night-rain.svg").default, day: false, type: "Rain" },
  { url: require("../images/conditions/night-storm.svg").default, day: false, type: "Thunderstorm" },
  { url: require("../images/conditions/night-snow.svg").default, day: false, type: "Snow" },
  { url: require("../images/conditions/night-fog.svg").default, day: false, type: "Fog" }
];