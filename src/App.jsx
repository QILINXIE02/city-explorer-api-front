import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import CitySearch from './CitySearch';
import Map from './Map';
import './index.css';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
    const [location, setLocation] = useState({});
    const [weather, setWeather] = useState([]);
    const [error, setError] = useState(null);

    async function handleSearch(city) {
        try {
            const locationURL = `${API_URL}/location?city=${city}`;
            const response = await axios.get(locationURL);
            const data = response.data;
            setLocation(data);

            getWeather(data);
        } catch (error) {
            console.error('Error fetching location data', error);
            setError('Failed to fetch location data. Please try again.');
        }
    }

    async function getWeather(location) {
        try {
            const weatherURL = `${API_URL}/weather?lat=${location.latitude}&lon=${location.longitude}`;
            const response = await axios.get(weatherURL);
            const data = response.data;
            setWeather(data);
            setError(null); // Reset error if fetching weather succeeds
        } catch (error) {
            console.error('Error fetching weather data', error);
            setError('Failed to fetch weather data. Please try again.');
        }
    }

    return (
        <>
            <CitySearch onSearch={handleSearch} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {Object.keys(location).length > 0 && (
                <>
                    <Weather weather={weather} />
                    <Map location={location} />
                </>
            )}
        </>
    );
}

export default App;
