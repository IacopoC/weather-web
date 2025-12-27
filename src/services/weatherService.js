
const BASE_URL = 'https://api.open-meteo.com/v1/forecast';

export async function fetchCurrentWeather(latitude, longitude) {
 const apiResponse = await fetch( `${BASE_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,rain,visibility,wind_speed_10m,snowfall,cloud_cover,showers,wind_gusts_10m,surface_pressure,wind_direction_10m`);

 if(!apiResponse.ok) {
     throw new Error('Network error on api request')
 }

 return apiResponse.json()
}

export async function fetchWeeklyWeather(latitude, longitude) {
    const apiResponse = await fetch(`${BASE_URL}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,wind_speed_10m&temporal_resolution=hourly_6&timezone=Europe%2FBerlin`);

    if(!apiResponse.ok) {
        throw new Error('Network error on api request')
    }

    return apiResponse.json();
}