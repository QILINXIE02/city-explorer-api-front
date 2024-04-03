import React, { useState } from 'react';
import CitySearch from './CitySearch';
import Weather from './Weather';

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
