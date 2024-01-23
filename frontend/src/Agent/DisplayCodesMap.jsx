import "./style.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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



export default function LocationMapView() {
    const [markers4, setMarkers4] = useState([]);
    const url = 'http://localhost:3000/listLocationCode';
    const [loading , setLoading] =useState(false)
    useEffect(() => {
        // Function to fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                // Update the state with the fetched data
                setMarkers4(data);
                setLoading(true)
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        // Call the fetch function
        fetchData();
    }, []); // The empty dependency array ensures that the effect runs once, similar to componentDidMount
    const resultArray = markers4 && markers4?.map(coordString => {
        const [latitude, longitude] = coordString.split(', ').map(Number);
        return [latitude, longitude];
    });

    // Store the output in a variable
    const convertedMarkers = resultArray;
    const [markers, setMarkers] = useState([]);
    const [center, setCenter] = useState([18.5204,73.8567]);
    


    useEffect(() => {
        convertedMarkers && setMarkers(convertedMarkers)
       
    }, [loading])
    //setLoading(!loading)
    //console.log('markers',convertedMarkers);


    return (<>

        <MapContainer center={center} zoom={11}>
            {/* OPEN STREEN MAPS TILES */}
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerClusterGroup
                chunkedLoading
                iconCreateFunction={createClusterCustomIcon}
            >
                {/* Mapping through the markers */}
                {markers.map((marker) => (
                    <Marker position={marker} icon={customIcon}>
                        {<Popup>
                            <div>
                                <h6>Test</h6>
                            </div>
                        </Popup>}
                    </Marker>
                ))}
            </MarkerClusterGroup>
        </MapContainer>
    </>
    );
}


