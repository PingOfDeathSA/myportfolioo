import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

import tackIcon from "./icons/box-truck.png";

const destinationOptions = [
  { name: "Johannesburg", coordinates: { lat: -26.2041, lng: 28.0473 } },
  { name: "Cape Town", coordinates: { lat: -33.9249, lng: 18.4241 } },
  { name: "Durban", coordinates: { lat: -29.8587, lng: 31.0218 } },
  // Add more destination options here
];

export default function SimpleMap() {
  const defaultCenter = {
    lat: -26.2041,
    lng: 28.0473
  };
  const defaultZoom = 11;

  const [currentLocation, setCurrentLocation] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(destinationOptions[0]);

  const { isLoaded } = useJsApiLoader({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const isLocationInBounds = (location) => {
    // Check if the location is within bounds
    // (similar to the previous implementation)
  };

  const mapCenter = currentLocation && isLocationInBounds(currentLocation)
    ? currentLocation
    : selectedDestination.coordinates;

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <div style={{ position: "absolute", top: "10px", left: "10px", zIndex: 100 }}>
        <label htmlFor="destination">Select Destination:</label>
        <select
          id="destination"
          value={selectedDestination.name}
          onChange={(e) => {
            const selectedOption = destinationOptions.find(option => option.name === e.target.value);
            setSelectedDestination(selectedOption);
          }}
        >
          {destinationOptions.map((option) => (
            <option key={option.name} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <GoogleMap
        mapContainerStyle={{ height: "100%", width: "100%" }}
        center={mapCenter}
        zoom={defaultZoom}
      >
        {currentLocation && isLocationInBounds(currentLocation) && (
          <Marker
            position={currentLocation}
            icon={{
              url: tackIcon,
              scaledSize: new window.google.maps.Size(40, 40)
            }}
            title="My Location"
          />
        )}
        <Marker
          position={selectedDestination.coordinates}
          title={`Destination: ${selectedDestination.name}`}
        />
      </GoogleMap>
    </div>
  );
}
