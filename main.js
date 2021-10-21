const main = document.querySelector("main")
const headers = new Headers({
    "User-Agent": "Today's Weather: David Michael Gregg <david@kenzie.academy>",
})


// STEP 1
navigator.geolocation.getCurrentPosition(getNWSPointData)

// STEP 2
function getNWSPointData (position) {
    console.log(position.coords.latitude, position.coords.longitude)

    const url = `https://api.weather.gov/points/${position.coords.latitude},${position.coords.longitude}`
    fetch(url, headers)
        .then(response => response.json())
        .then(getNWSForecastData)
}

// STEP 3
function getNWSForecastData (point) {
    const url = point.properties.forecastHourly
    fetch(url, headers)
        .then(response => response.json())
        .then(renderCurrentWeather)
}

// STEP 4
function renderCurrentWeather (forecast) {
    const currentHourForecast = forecast.properties.periods[0]
    const { icon, shortForecast, temperature } = currentHourForecast
    const temperatureUnit = (currentHourForecast.temperatureUnit === "F")
        ? "℉"
        : "℃"

    /*
        <article>
            <h2>Mostly Sunny</h2>
            <img src="NWS ICON LINK HERE">
            <h3>61℉</h3>
        </article>
    */

    const forecastElement = document.createElement("article")
    
    const title = document.createElement("h2")
    title.append(shortForecast)
    forecastElement.append(title)

    const iconElement = document.createElement("img")
    iconElement.src = icon
    forecastElement.append(icon)

    const temperatureElement = document.createElement("h3")
    temperatureElement.append(temperature + temperatureUnit)
    forecastElement.append(temperatureElement)

    main.append(forecastElement)
}