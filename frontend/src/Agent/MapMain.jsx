// App.js
import React from 'react';
import GoogleMapView from './MapView';
import MapView from './MapView';
import LeafletMapView from './MapView';

const MapMain = () => {
    const sampleData = {
        name: 'Sample Location',
        latitude: 37.7749, // Replace with actual latitude
        longitude: -122.4194, // Replace with actual longitude
      };
  return (
    <div>
      <h1>Map View Example</h1>
      <LeafletMapView />
    </div>
  );
};

export default MapMain;
