import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Weather({ data }) {
    if (!data || data.length === 0) {
        return <p>No weather data available.</p>;
    }

    return (
        <div>
            <h2>Weather Forecast for {data.city}</h2>
            <p>Latitude: {data.latitude}, Longitude: {data.longitude}</p>
            <div className="d-flex flex-wrap justify-content-around">
                {data.map((forecast, index) => (
                    <div key={index} className="card m-2" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h5 className="card-title">{forecast.date}</h5>
                            <p className="card-text">{forecast.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Weather;
