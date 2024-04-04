import React, { useState } from 'react';
import axios from 'axios';
import Weather from './Weather';
import CitySearch from './CitySearch';
import Map from './Map'; 
import './index.css';

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
            const url = `https://us1.locationiq.com/v1/search?key=${accessToken}&q=${city}&format=json`; // Use accessToken directly
            const response = await axios.get(url);

            if (response.data && response.data.length > 0) {
                const locationData = response.data[0];
                setLocation(locationData);
                setWeatherData(null);
                setError(null);
            } else {
                setError("No results found. Please try a different location.");
            }
        } catch (error) {
            console.error("Error fetching location data", error);
            setError("Failed to fetch location data. Please try again.");
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
            <Map lat={location.lat} lon={location.lon} /> {/* Pass lat and lon data to Map component */}
        </div>
    );
}

export default App;
