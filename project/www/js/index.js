document.addEventListener('deviceready', main, false);

async function main() {
	console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
	console.log(alert(JSON.stringify(await getRandomCity())));
}

async function getRandomCity() {
	const request = await fetch('https://avancera.app/cities');
	const response = await request.json();
	return response ? response[Math.floor(Math.random() * response.length)] : null;
}
