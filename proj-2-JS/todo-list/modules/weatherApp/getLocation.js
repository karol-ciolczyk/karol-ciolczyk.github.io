import { getWeatherConditions } from "./getWeatherConditions.js";

export const getLocation = (city) => {
  fetch(
    `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=1c7TBu4MybMcEKxCr30xDolto2UWRYDl&q=${city}`
  )
    .then((response) => response.json())
    .then((data) => {
      const weatherObject = {};

      console.log(data[0]);
      let key = data[0].Key;

      weatherObject.city = `${data[0].EnglishName}`;
      weatherObject.type = `${data[0].Type}`;

      getWeatherConditions(key).then((data) => {
        console.log(data[0]);
        weatherObject.condition = data[0].WeatherText;
        weatherObject.icon = data[0].WeatherIcon;
        weatherObject.isDay = data[0].IsDayTime;
        weatherObject.temperature = data[0].Temperature.Metric.Value;

        console.log(weatherObject);

        // values from weatherObject:
        const location = weatherObject.city;
        const iconNumber = weatherObject.icon;
        const isDay = weatherObject.isDay;
        const temp = weatherObject.temperature;
        const cond = weatherObject.condition;

        // change weather/location values in DOM
        const city = document.querySelector(".city");
        const temperature = document.querySelector(".temperature span");
        const condition = document.querySelector(".condition");
        const icon = document.querySelector(".icon img");
        const appContainer = document.querySelector(".weatherApp-container");

        city.textContent = `${location}`;
        temperature.textContent = `${temp}`;
        condition.textContent = `${cond}`;
        icon.setAttribute(`src`, `./img/icons/${iconNumber}.svg`);

        if (iconNumber < 6) {
          appContainer.style.background = `url('./img/petar-jadek-UpFk7QQm33k-unsplash.jpg')`;
          appContainer.style.backgroundSize = `cover`;
        } else if (iconNumber > 5 && iconNumber < 12) {
          appContainer.style.background = `url('./img/day-cloudy.jpg')`;
          appContainer.style.backgroundSize = `cover`;
        } else if (iconNumber > 11 && iconNumber < 20) {
          appContainer.style.background = `url('./img/day-rain.jpg')`;
          appContainer.style.backgroundSize = `cover`;
        } else if (iconNumber > 19 && iconNumber < 30) {
          appContainer.style.background = `url('./img/day-frost.jpg')`;
          appContainer.style.backgroundSize = `cover`;
        } else if (iconNumber > 32 && iconNumber < 38) {
          appContainer.style.background = `url('./img/nigth-clear.jpg')`;
          appContainer.style.backgroundSize = `cover`;
        } else if (iconNumber > 37 && iconNumber < 43) {
          appContainer.style.background = `url('./img/night-rain.jpg')`;
          appContainer.style.backgroundSize = `cover`;
        } else if (iconNumber > 42 && iconNumber <= 44) {
          appContainer.style.background = `url('./img/night-frost.jpg')`;
          appContainer.style.backgroundSize = `cover`;
        }
      });
    })
    .catch((err) => console.log(err));
};
