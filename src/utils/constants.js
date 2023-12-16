

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

/*═════════╕
 │ CLOTHES │
 ╘═════════*/
 export const defaultClothingItems = [
  {
    _id: 0,
    name: "Cap",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591",
  },
  {
    _id: 1,
    name: "Hoodie",
    weather: "moderate",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8",
  },
  {
    _id: 2,
    name: "Jacket",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jacket.png?etag=f4bb188deaa25ac84ce2338be2d404ad",
  },
  {
    _id: 3,
    name: "Sneakers",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f",
  },
  {
    _id: 4,
    name: "T-Shirt",
    weather: "hot",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09",
  },
  {
    _id: 5,
    name: "Winter coat",
    weather: "cold",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4",
  }
]