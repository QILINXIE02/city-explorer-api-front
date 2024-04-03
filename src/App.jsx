import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import CitySearch from './CitySearch';
import CombinedComponents from './CombinedComponents';

function App() {
    const [weatherData, setWeatherData] = useState(null);
    const [city, setCity] = useState('');
    const [location, setLocation] = useState({});
    const [error, setError] = useState(null);
    const accessToken = import.meta.env.VITE_LOCATION_ACCESS_TOKEN;

    async function getLocation() {
        if (!city) {
            setError('Please enter a city name.');
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3000/weather`, {
                params: { searchQuery: city }
            });

            if (response.data && response.data.length > 0) {
                const locationData = response.data[0];
                setLocation(locationData);
                setWeatherData(response.data); 
                setError(null);
            } else {
                setError("No results found. Please try a different location.");
            }
        } catch (error) {
            console.error("Error fetching location/weather data", error);
            setError("Failed to fetch location/weather data. Please try again.");
        }
    }

    function handleNewCity(e) {
        setCity(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        getLocation();
    }

    return (
        <div>
            <CitySearch onWeatherDataFetched={setWeatherData} />
            <Weather data={weatherData} />
            <CombinedComponents location={location} weatherData={weatherData} accessToken={accessToken} />
        </div>
    );
}

export default App;
