import { getLocation } from "./modules/weatherApp/getLocation.js";

const whatCity = document.querySelector(".whatCity");
const inp = document.querySelector(".whatCity input");
whatCity.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(inp.value);
  let city = inp.value;

  // alert(
  //   "Unfortunately, this request may be blocked due to unsecured (HTTP) accuWeather API resources. Clone the repo to see how it works"
  // );
  getLocation(city);
});
