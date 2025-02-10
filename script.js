const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY";  // Replace with your API key

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();

        document.getElementById("cityName").innerText = `Weather in ${data.name}`;
        document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
        document.getElementById("description").innerText = `Condition: ${data.weather[0].description}`;

    } catch (error) {
        alert(error.message);
    }
}
