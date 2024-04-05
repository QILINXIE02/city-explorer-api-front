import React from 'react';

function Map({ location }) {
    if (!location.lat || !location.lon) return null;

    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${import.meta.env.VITE_LOCATION_ACCESS_TOKEN}&center=${location.lat},${location.lon}&zoom=13&size=600x400&format=png&maptype=roadmap`;

    return (
        <div>
            <img src={mapUrl} alt="Location Map" style={{ width: '100%', height: 'auto' }} />
        </div>
    );
}

export default Map;
