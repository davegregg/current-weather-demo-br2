# Today's Weather Project

Description: *Show the user the current weather in their location.*

0. Research and experimentation with the US National Weather Service API.
                                         👇 latitude
    - GET https://api.weather.gov/points/39.7456,-97.0892
                                                👆 longitude
        - data.properties.forecastHourly
            - URL for fetching the hourly forecast 👇
    - GET https://api.weather.gov/gridpoints/TOP/31,80/forecast/hourly
        - data.properties.periods[0]
            - Forecast for the current hour

1. I need to find the user's current geographical location.
    - GPS/Geolocation API to get the **latitude** and **longitude** coordinates.
    - Ask user for ZIP code, street address, or city.
    - Use the user's IP address to guestimate their approximate location.
    - Use the user's timezone and language to guestimate their approximate location.

2. Fetch request to GET https://api.weather.gov/points/{latitude},{longitude}
    - To get the URL for the hourly forecast (data.properties.forecastHourly)

3. Fetch request to GET https://api.weather.gov/gridpoints/{XXX}/{NN},{NN}/forecast/hourly
    - Forecast for the current hour (data.properties.periods[0])

4. Display the current weather on the page to the user.