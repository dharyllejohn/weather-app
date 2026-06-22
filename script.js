function getWeather(){
    let city = document.getElementById("cityInput").value;
    let apiKey = "629f053dfbbab8a226e66f821b686c78";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
    <input type="text" id="cityInput" placeholder="Enter city...">
    <button onclick="getWeather()">Search</button>

    <div id="result"></div>
        
        console.log(data);

        if(data.cod !== 200){
            document.getElementById("result").innerHTML = "City not found or API error";
            return;
        }

        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p>${data.main.temp}°C</p>
            <p>${data.weather[0].description}</p>
        `;
    })
    .catch(error => {
        document.getElementById("result").innerHTML = "Error fetching data";
        console.log(error);
    });
}
