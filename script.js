function getWeather(){
    let city = document.getElementById("cityInput").value;

    let apiKey = "YOUR_API_KEY_HERE";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("result").innerHTML =
        `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        `;
    });
}
