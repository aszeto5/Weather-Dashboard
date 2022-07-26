//API KEY Variable
var apiKey = "7290a594bbadd418d0ead81df2092134";
// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={7290a594bbadd418d0ead81df2092134}
const todayForecastEl = document.getElementById("todayForecast");
const nameEl = document.getElementById("cityName");
const weatherPic = document.getElementById("thisPic");
const tempEl = document.getElementById("temperature");
const humEl = document.getElementById("humidity");
const windEl = document.getElementById("wind-speed");
const uvEl = document.getElementById("UV-index");

function fetchWeather(cityName) {
    let apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    axios.get(apiURL)
        .then(function (response) {
            todayForecastEl.classList.remove("d-none");

            const currentDate = new Date(response.data.dt * 1000);
            const day = currentDate.getDate();
            const month = currentDate.getMonth();
            const year = currentDate.getFullYear();
            nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
            let weatherImage = response.data.weather[0].icon;
            weatherPic.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherImage + ".png");
            weatherPic.setAttribute("alt", response.data.weather[0].description);
            tempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
            humEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
            windEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
        })
}

//Search History
