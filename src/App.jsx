import React, { useState } from 'react';
import CitySearch from './components/CitySearch';
import Weather from './components/Weather';

function App() {
    const [weatherData, setWeatherData] = useState(null);

    return (
        <div>
            <CitySearch onWeatherDataFetched={setWeatherData} />
            {weatherData && <Weather data={weatherData} />}
        </div>
    );
}

export default App;