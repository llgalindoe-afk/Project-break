async function getWeather(city) {
  const apiKey = 'd63d4edc1c614b938ea81113230112';
  const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    const response = await fetch(weatherUrl)
    const weather  = await response.json()
    currentWeather(weather)
    forescastWeather(weather)
  } catch (error){
      throw error
  }

}

function currentWeather({current, location}) {
  const currentWeather = document.getElementById('currentWeather');
  const {name, country} = location
  const {condition: {text, icon}, temp_c, humidity, wind_kph, precip_in} = current 
  const currentTemplate = ` 
  <h2>${name} / ${country}</h2>
  <p>${text}</p>
  <div class="current-data">
    <div class="current-grades">
      <img class="weather-icon" src="http:${icon}" alt="${text}">
      <div style="display: flex; align-items: center; gap: 5px;">${temp_c}<img src="./images/celsius.png" alt="º" style="width: 30px; height: 30px;"></div>
    </div>
    <ul>
      <li>Precipitaciones: ${precip_in}%</li>
      <li>Humedad: ${humidity}%</li>
      <li>Viento: ${wind_kph} Km/h</li>
    </ul>
  </div>
  `
  currentWeather.innerHTML = currentTemplate;
}

function forescastWeather({location, forecast}) {
  try {
    const forecastWeather = document.getElementById('forecastWeather');
    if (!forecastWeather) return; // Prevent error if element doesn't exist
    forecastWeather.innerHTML = '';
    const forecastDay = forecast.forecastday[0].hour;
    const currentHour = parseInt(location.localtime.split(" ")[1].split(":")[0]);
    
    const filteredHours = forecastDay.filter(day => {
      const dayHour = parseInt(day.time.split(" ")[1].split(":")[0]);
      return dayHour >= currentHour;
    });
    
    filteredHours.forEach(day => {
      const {condition: {text, icon}, time, temp_c} = day;
      const timeFormat = time.split(" ")[1];
      const forecastTemplate = `
      <li class="forecast-grades">
        <span>${timeFormat}</span>
        <img class="nube" src="http:${icon}" alt="${text}">
        <p>${temp_c} °C</p>
      </li>
      `;
      forecastWeather.innerHTML += forecastTemplate;
    });
  } catch (err) {
    console.error("Error al renderitzar la predicció:", err);
  }
}


getWeather('barcelona')