import React, { useState } from 'react';
import axios from 'axios';

function CitySearch({ onWeatherDataFetched }) {
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState('');

  const handleCitySearch = async (e) => {
    e.preventDefault();

    if (!cityName.trim()) {
      setError('Please enter a city name.');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:3000/weather`, {
        params: { searchQuery: cityName }
      });

      onWeatherDataFetched(response.data); 
      setError(''); 
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setError('Error fetching weather data. Please try again.');
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
        <button type="submit">Search</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}

export default CitySearch;
