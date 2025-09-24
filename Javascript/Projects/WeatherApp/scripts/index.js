const form = document.getElementById('cityname-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const cityNameField = document.getElementById('city');

    fetchWeatherData(cityNameField.value.toLowerCase());

    cityNameField.value = "";
});


async function fetchWeatherData(cityName){
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=da3b16eb087b566c183a2a905020d01b`;

    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();

            displayWeather(data);
        }else{
            throw new Error("Unable to fetch the data for "+cityName)
        }
    }catch(error){
        console.error("Failed to fetch weather data:", error);
    }
}


function displayWeather(data){
    console.log(data);
    const appBackground = document.getElementById('bg-video');
    const appBgSound = document.getElementById('bg-audio');

    const weather = data.weather[0].main.toLowerCase();

    let weatherIcon = 'sunny.png';

    if(weather == "haze"){
        appBackground.src = './assets/haze.mp4';
        appBgSound.src = ""
        weatherIcon = 'haze.png';
    }else if(weather == 'clouds'){
        appBackground.src = './assets/clouds.mp4';
        appBgSound.src = "./assets/sounds/clouds.mp3";
        weatherIcon = 'cloudy.png';
    }else if(weather == 'mist'){
        appBackground.src = './assets/mist.mp4';
        appBgSound.src = ""
        weatherIcon = 'fog.png';
    }else if(weather == 'thunderstorm'){
        appBackground.src = './assets/thunderstrom.mp4';
        appBgSound.src = "./assets/sounds/thunderstorm.wav";
        weatherIcon = 'thunderstorm.png';

    }else if(weather == 'rain'){
        appBackground.src = './assets/rain.mp4';
        appBgSound.src = "./assets/sounds/rain.wav";
        weatherIcon = 'rain.png';
    }else if(weather == "drizzle"){
        appBackground.src = './assets/drizzle.mp4';
        appBgSound.src = "./assets/sounds/drizzle.mp3";
        weatherIcon = 'rain.png';
    }
    else{
        appBackground.src = "./assets/clearSky.mp4";
        appBgSound.src = "./assets/sounds/birdsSound.wav";
        weatherIcon = 'sunny.png';
    }

    showWeatherCard(data, weatherIcon);
}

function showWeatherCard({name, main, weather,wind, sys}, weatherIcon){
    const displayContainer = document.querySelector('.weather-report-container');

    displayContainer.innerHTML = `
        <div class="city-title">City Name : <span id="cityname-holder">${name}</span></div>
            <div class="main-weather-details">
                <div class="weather-details">
                    <div class="current-temp">
                        ${Math.round(main.temp)}&#8451;
                    </div>
                    <div class="weather-icon-container">
                        <img src="./assets/images/${weatherIcon}" alt="" id="weather-icon">
                        <div class="weather-description">
                            ${weather[0].description}
                        </div>
                    </div>
                </div>
                <div class="humidity-title-container">
                    <div class="humidity-title">Humidity</div>
                    <div class="humidity-details">
                        <div class="circular-progress" data-inner-circle-color="lightgrey" data-percentage="${main.humidity}" data-progress-color="#ff7300" data-bg-color="black">
                        <div class="inner-circle"></div>
                        <div class="percentage">
                            ${main.humidity}%
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="extra-weather-details">
                <div class="temp-container">
                    <div class="min-temp">Min : ${Math.round(main.temp_min)}&#8451;</div>
                    <div class="max-temp">Max : ${Math.round(main.temp_max)}&#8451;</div>
                    <div class="feels-like">Feels like : ${Math.round(main.feels_like)}&#8451;</div>
                </div>
                <div class="wind-info">
                    <div class="wind-arrow-container">
                        <img id="wind-arrow" src="./assets/images/arrow.png" style='
                            transform : rotate(${wind.deg}deg);
                        ' />
                    </div>
                    <div class="wind">
                        <div class="speed">${wind.speed} km/h</div>
                        <div class="gust">${wind.gust || ""}</div>
                    </div>
                </div>
                <div class="country-info">
                   Country :  ${sys.country}
                </div>
            </div>
    `;

    /* circular animation */

    const circularProgress = document.querySelectorAll(".circular-progress");

    Array.from(circularProgress).forEach((progressBar) => {
    const progressValue = progressBar.querySelector(".percentage");
    const innerCircle = progressBar.querySelector(".inner-circle");
    let startValue = 0,
        endValue = Number(progressBar.getAttribute("data-percentage")),
        speed = 30,
        progressColor = progressBar.getAttribute("data-progress-color");

    const progress = setInterval(() => {
        startValue++;
        progressValue.textContent = `${startValue}%`;
        progressValue.style.color = `${progressColor}`;

        innerCircle.style.backgroundColor = `${progressBar.getAttribute(
        "data-inner-circle-color"
        )}`;

        progressBar.style.background = `conic-gradient(${progressColor} ${
        startValue * 3.6
        }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
        if (startValue === endValue) {
        clearInterval(progress);
        }
    }, speed);
    });
}


