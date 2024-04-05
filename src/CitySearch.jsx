import React, { useState } from 'react';
import axios from 'axios';

function CitySearch({ onLocationFetched }) {
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleCitySearch = async (e) => {
    e.preventDefault();

    if (!cityName.trim()) {
      setError('Please enter a city name.');
      return;
    }

    setLoading(true);
    try {
      // Assuming you have a backend route /location that expects a city query parameter
      const locationResponse = await axios.get(`http://localhost:3000/location?city=${cityName}`);
      
      // Once you have the location data, you might want to fetch weather data
      // This function should exist in your parent component
      // It should handle the fetching of weather data based on the location data
      onLocationFetched(locationResponse.data);

      setError('');
    } catch (error) {
      console.error('Error fetching location data:', error);
      setError('Failed to fetch location data. Please try again.');
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
