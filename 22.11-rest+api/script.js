const writeWeatherData = (weatherData) => {
    let container = $('[data-role="weather-container"]')
    $.each(weatherData.main, (key, value) => {
        container.append(`<div><span>${key.replace("_", " ")}</span>`)
        container.append(`<span>${value}</span></div>`)
    });
}
getWeather(writeWeatherData)

function getWeather(cb) {
    //1debugger
    $.getJSON('https://api.openweathermap.org/data/2.5/weather?q=London&appid=eb98981901058b162b2802e1ddd392b9', cb)
    //2debugger
}


