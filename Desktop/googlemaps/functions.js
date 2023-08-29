const mapContainer = document.getElementById('map-container');

function initMap() {
    // You'll need to set up Google Maps JavaScript API in your project
    const map = new google.maps.Map(mapContainer, {
        zoom: 10,
        center: { lat: 0, lng: 0 } // Replace with your initial center
    });

    // Simulating current location
    const currentLocation = { lat: 0, lng: 0 }; // Replace with actual coordinates

    // Add marker for the current location
    const marker = new google.maps.Marker({
        position: currentLocation,
        map: map,
        label: 'Track A',
        icon: 'path/to/truck-icon.png', // Replace with actual path
        title: 'Current Location'
    });
}

// This function will load the Google Maps API and initialize the map
function loadMapScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDE2npGBtTPEK_sJnVXdHcWyKoLst2Ydv8&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}

// Load the map script when the page is loaded
window.addEventListener('load', loadMapScript);
