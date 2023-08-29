const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const axios = require('axios');
const apiKey = 'AIzaSyBwHcqi7l82leVJNZxLorYn3kuWuypwFZM'; // Replace with your actual API key



async function fetchRouteCoordinates() {
  try {
    const origin = 'Cape Town';
    const destination = 'Johannesburg';

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${apiKey}`
    );
    console.log(response.data);

    const route = response.data.routes[0];
    if (route) {
      const routeCoordinates = route.overview_polyline.points;
      console.log(routeCoordinates);
    } else {
      console.log('No routes found.');
    }
  } catch (error) {
    console.error(error);
  }
}

fetchRouteCoordinates(); // Call the asynchronous function immediately

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

