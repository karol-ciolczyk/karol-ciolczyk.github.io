// export const getWeatherConditions = function(key){
//     fetch(`http://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=2HjTBrGn6KjzzlHbNbFhg8N4XIk74bRx`)
//     .then(response => response.json())
//     .then(data => console.log(data[0]))
//     .catch(err => console.log(err))
// }

export const getWeatherConditions = function (key) {
  return fetch(
    `https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=1c7TBu4MybMcEKxCr30xDolto2UWRYDl`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
