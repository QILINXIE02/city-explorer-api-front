import React, { useState } from 'react';
import CitySearch from './components/CitySearch';
import Weather from './components/Weather';

function App() {
    const [weatherData, setWeatherData] = useState([]);

    const handleWeatherDataFetched = (data) => {
        setWeatherData(data);
    };

    return (
        <div>
            <CitySearch onWeatherDataFetched={handleWeatherDataFetched} />
            <Weather data={weatherData} />
        </div>
    );
}

export default App;