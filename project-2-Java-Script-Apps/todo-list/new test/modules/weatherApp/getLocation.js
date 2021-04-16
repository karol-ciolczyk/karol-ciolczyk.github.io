import { getWeatherConditions } from "./getWeatherConditions.js";

export const getLocation = (city)=>{
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=1c7TBu4MybMcEKxCr30xDolto2UWRYDl&q=${city}`)
    .then(response => response.json())
    .then(data => {
        const weatherObject = {};

        console.log(data[0]);
        let key = data[0].Key;

        weatherObject.city = `${data[0].EnglishName}`;
        weatherObject.type = `${data[0].Type}`;

        getWeatherConditions(key).then(data => {
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
            const city = document.querySelector('.city');
            const temperature = document.querySelector('.temperature span');
            const condition = document.querySelector('.condition');
            const icon = document.querySelector('.icon img');
            const appContainer = document.querySelector('.weatherApp-container')

            city.textContent = `${location}`;
            temperature.textContent = `${temp}`;
            condition.textContent = `${cond}`;
            icon.setAttribute(`src`, `./img/icons/${iconNumber}.svg`);
            appContainer.style.background = `url('./img/${isDay}.jpg')`;
            appContainer.style.backgroundSize = `cover`;


        })

    })
    .catch(err => console.log(err))
}
