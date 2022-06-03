document.addEventListener('deviceready', main, false);

async function main() {
	const city = await getRandomCity();
	const cityElement = createCity(city);
	document.querySelector('#city-wrapper').appendChild(cityElement);
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
