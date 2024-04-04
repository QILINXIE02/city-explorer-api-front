import React from 'react';
import './css/WeatherDay.css';
function WeatherDay({date, description}) {
  return (
    <div className="weather-day">
      <p>Date: {date}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default WeatherDay;
