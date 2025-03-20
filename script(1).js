const apiKey = 'YOUR_OPENWEATHER_API_KEY'; // Replace with your OpenWeather API Key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('city').value.trim();
    if (city) {
        fetchWeatherData(city);
    } else {
        displayError('Please enter a city name');
    }
});

// Function to fetch weather data from OpenWeather API
async function fetchWeatherData(city) {
    const url = `${apiUrl}?q=${city}&appid=${apiKey}&units=metric`; // You can change units to 'imperial' for Fahrenheit

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            displayWeatherData(data);
        } else {
            displayError(data.message);
        }
    } catch (error) {
        displayError('An error occurred. Please try again.');
    }
}

// Function to display the weather data
function displayWeatherData(data) {
    const { name, main, weather, sys } = data;

    document.getElementById('weather