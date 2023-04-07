window.addEventListener('load', function(e) {
	console.log('script.js loaded');
	init();
});

function init() {
	console.log('in init');
	loadAllDogs();
};

function loadAllDogs() {
	//	xhr stuff
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/dogs');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let dogs = JSON.parse(xhr.responseText);
				displayListOfDogs(dogs);
			}
		}
	}
	xhr.send();
};

function displayListOfDogs(dogs) {
	let tbody = document.getElementById('dogListTbody');
	tbody.textContent = '';
	
	for (let dogGuest of dogs) {
		let tr = document.createElement('tr');
		tbody.appendChild(tr);
		let td = document.createElement('td');
		td.textContent = dogGuest.name;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = dogGuest.breed;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent =  dogGuest.adoptable ? "Needs a home" : "Has a home";
		tr.appendChild(td);

	}
};

function addNewDoggoGuest(newDog) {
	let xhr = new XMLHttpRequest();
		xhr.open('POST', 'api/dog/newDog');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.readyState === 201) {
				let dog = JSON.parse(xhr.responseText);
				displayFilm(dog);
			}
			else {
				console.error('POST Req failed ' + xhr.status)
				displayError('Error adding new dog guest: ' + xhr.status);
			}
		}
	};

	xhr.setRequestHeader("Content-type", "application/json");
	let newJsonDog = JSON.stringify(newDog);
	xhr.send(newJsonDog); //fix need to send request body
}

