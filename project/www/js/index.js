document.addEventListener('deviceready', main, false);

async function main() {
	// Get random city
	const city = await getRandomCity();
	const cityElement = createCity(city);
	document.querySelector('#city-wrapper').appendChild(cityElement);

	// Get device location
	getDeviceLocation();
}

async function getRandomCity() {
	const request = await fetch('https://avancera.app/cities');
	const response = await request.json();
	return response ? response[Math.floor(Math.random() * response.length)] : null;
}

function createCity(city) {
	const cityElement = document.createElement('div');
	cityElement.classList.add('city');
	cityElement.innerHTML = `
		<h2>${city.name}</h2>
		<p>Invånare: ${city.population}</p>
	`;
	return cityElement;
}

async function getDeviceLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((location) => showLocation(location));
	} else {
		alert('Geolocation is not supported by this browser.');
	}
	return location;
}

function showLocation(location) {
	const locationElement = document.createElement('div');
	locationElement.classList.add('location');
	locationElement.innerHTML = `
		<h2>Din position</h2>
		<p>Latitude: ${location.coords.latitude}</p>
		<p>Longitude: ${location.coords.longitude}</p>
	`;
	document.querySelector('#location-wrapper').appendChild(locationElement);
}
