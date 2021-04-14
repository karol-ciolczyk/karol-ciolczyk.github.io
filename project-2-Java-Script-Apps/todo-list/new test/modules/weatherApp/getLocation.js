import { getWeatherConditions } from "./getWeatherConditions.js";

export const getLocation = (city)=>{
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=2HjTBrGn6KjzzlHbNbFhg8N4XIk74bRx&q=${city}`)
    .then(response => response.json())
    .then(data => {
        const newObject = {};

        console.log(data[0]);
        let key = data[0].Key;

        newObject.city = `${data[0].EnglishName}`;
        newObject.type = `${data[0].Type}`;

        getWeatherConditions(key).then(data => {
            console.log(data[0]);
            newObject.condition = data[0].WeatherText;
            newObject.icon = data[0].WeatherIcon;
            newObject.isDay = data[0].IsDayTime;
            newObject.temperature = data[0].Temperature.Metric.Value;


            console.log(newObject);
        })

    })
    .catch(err => console.log(err))
}
