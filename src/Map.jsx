import React from 'react';

function Map({ lat, lon }) {
    if (!lat || !lon) return null;

    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.VITE_LOCATION_ACCESS_TOKEN}&center=${lat},${lon}&zoom=13&size=600x400&format=png&maptype=roadmap`;

    return (
        <div>
            <img src={mapUrl} alt="Location Map" style={{ width: '100%', height: 'auto' }} />
        </div>
    );
}

export default Map;
