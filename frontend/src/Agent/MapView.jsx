import "./style.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Icon, divIcon, point } from "leaflet";
import { useEffect, useState } from "react";

// create custom icon
const customIcon = new Icon({
  // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
  iconUrl: require("./icons/placeholder.png"),
  iconSize: [38, 38] // size of the icon
});

// custom cluster icon
const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true)
  });
};

// markers
const initialmarkers = [
];

export default function LeafletMapView() {
    const [markers, setMarkers] = useState(initialmarkers);
    const [center, setCenter] = useState([18.576661, 73.688883]);

   
      const getCurrentLocation = () => {
        if ('geolocation' in navigator) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              const newMarker = {
                geocode: [latitude, longitude],
                popUp: 'Current Location'
              };
              setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
              setCenter([latitude, longitude]);
            },
            (error) => {
              console.error('Error getting current location:', error.message);
            }
          );
        } else {
          console.error('Geolocation is not supported by your browser');
        }
      };
  
 // The empty dependency array ensures that this effect runs once, similar to componentDidMount
  

    const handleMapClick = (e) => {
      const { lat, lng } = e.latlng;
      const newMarker = {
        geocode: [lat, lng],
        popUp: 'Placeholder Marker'
      };
  
      setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
      console.log(markers)
      console.log(initialmarkers);
    };

   console.log(center);


  return (<>
    <button onClick={getCurrentLocation}>Get Current Location</button>

    <MapContainer center={center} zoom={13}>
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

<MapClickHandler onMapClick={handleMapClick} />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createClusterCustomIcon}
      >
        {/* Mapping through the markers */}
        {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{markers.popUp}</Popup>
          </Marker>
        ))}

 
      </MarkerClusterGroup>
    </MapContainer>
    </>
  );
}
const MapClickHandler = ({ onMapClick }) => {
    const map = useMapEvents({
      click: (e) => {
        onMapClick(e);
      }
    });
  
    return null;
  };