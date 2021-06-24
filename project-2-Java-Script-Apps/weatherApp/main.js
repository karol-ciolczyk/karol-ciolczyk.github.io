import { getLocation } from "./modules/weatherApp/getLocation.js";

const whatCity = document.querySelector(".whatCity");
const inp = document.querySelector(".whatCity input");
whatCity.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(inp.value);
  let city = inp.value;

  getLocation(city);
});
