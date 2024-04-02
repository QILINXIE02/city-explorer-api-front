import React, { useState } from 'react';
import axios from 'axios';

function CitySearch({ onWeatherDataFetched }) {
    const [cityName, setCityName] = useState('');

    const handleCitySearch = async (e) => {
        e.preventDefault();

        try {            
            const response = await axios.get(`http://localhost:3000/weather`, {
                params: { searchQuery: cityName }
            });

            onWeatherDataFetched(response.data);
        } catch (error) {
            console.error('Error:', error);
            alert('Error fetching data.' + error);
        }
    };

    return (
        <form onSubmit={handleCitySearch}>
            <input 
                type="text" 
                value={cityName} 
                onChange={(e) => setCityName(e.target.value)}
                placeholder="Enter City Name"
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default CitySearch;