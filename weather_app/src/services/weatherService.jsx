export const fetchWeatherData = async (city, API_KEY) => {
  if (city === "") {
    throw new Error("City name should not be empty.");
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch weather data.");
  }

  return data;
};
