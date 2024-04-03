import React from 'react';

const Title = ({ location }) => {
  return (
    <>
      {location.display_name ?
        <section>
          <h4>Location Information For: {location.display_name}</h4>
        </section>
        : null
      }
    </>
  );
}

function Weather({ data }) {
  if (!data || data.length === 0) {
    return <p>No weather data available.</p>;
  }
  console.log(data);
  return (
    <div>
      <h2>Weather Forecast for {data.city}</h2>
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

const Map = ({ location, accessToken }) => {
  return (
    <When condition={location.lat && location.lon}>
      <section className="text-center">
        <img
          className="img-fluid rounded"
          src={`https://maps.locationiq.com/v3/staticmap?key=${accessToken}&center=${location.lat},${location.lon}&size=600x400&zoom=13`}
          alt="Map"
        />
      </section>
    </When>
  );
}

const ErrorMessage = ({ message }) => {
  return (
    <div className="alert alert-danger" role="alert" aria-live="assertive">
      {message}
    </div>
  );
}

const CombinedComponents = ({ location, weatherData, accessToken }) => {
  return (
    <div>
      <Title location={location} />
      <Weather data={weatherData} />
      <Map location={location} accessToken={accessToken} />
      <ErrorMessage message={error} />
    </div>
  );
}

export default CombinedComponents;
