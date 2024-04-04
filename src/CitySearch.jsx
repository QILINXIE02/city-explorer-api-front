import React, { useState } from 'react';
import axios from 'axios';

function CitySearch({ onWeatherDataFetched }) {
    const [cityName, setCityName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleCitySearch = async (e) => {
        e.preventDefault();

        if (!cityName.trim()) {
            setError('Please enter a city name.');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/weather`, {
                params: { lat: 0, lon: 0 } // Placeholder coordinates since params are required
            });

            onWeatherDataFetched(response.data);
            setError('');
        } catch (error) {
            console.error('Error fetching weather data:', error);
            setError('Error fetching weather data. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleCitySearch}>
                <input
                    type="text"
                    value={cityName}
                    onChange={(e) => setCityName(e.target.value)}
                    placeholder="Enter City Name"
                />
                <button type="submit" disabled={loading}>Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default CitySearch;
