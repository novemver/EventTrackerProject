window.addEventListener('load', function(e) {
	console.log('script.js loaded');
	init();
});

function init() {
	console.log('in init');
	loadAllDogs();
	/*addNewDoggoGuest();*/

	document.seeDogForm.lookup.addEventListener('click', function(evt) {
		evt.preventDefault();
		let id = document.seeDogForm.id.value;
		console.log(id);
		if (!isNaN(id) && id > 0) {
			getDogById(id);

		}
	});

	document.newDogForm.addDogButton.addEventListener('click', function(event) {
		event.preventDefault();
		let form = document.newDogForm;

		let dog = {
			name: form.name.value,
			breed: form.breed.value,
			gender: form.gender.value,
			birthDay: form.birthDay.value,
			owner: form.owner.value,
			description: form.description.value,
			onSite: form.onSite.value,
			adoptable: form.adoptable.value,
			isFriendly: form.isFriendly.value,
			fixed: form.fixed.value,
			height: form.height.value,
			length: form.length.value,
			fixed: form.fixed.value,
			weight: form.weight.value,
			weight: form.weight.value,
		};
		console.log(dog);
		addNewDoggoGuest(dog);
	});

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

		tr.addEventListener('click', function(evt) {
			evt.preventDefault();
			let id = evt.target.parentElement.firstELementChild.textContent;
			console.log(id);
		});

		let td = document.createElement('td');
		td.textContent = dogGuest.id;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = dogGuest.name;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = dogGuest.breed;
		tr.appendChild(td);
		td = document.createElement('td');
		td.textContent = dogGuest.adoptable ? "Needs a home" : "Has a home";
		tr.appendChild(td);

	}


};
function displayDog(dog) {
	let = dogDiv
}
function displayError(errorMsg) {
	let dogDiv = document.getElementById('dogDataDiv');

	dogDiv.textContent = '';
	dogDiv.textContent = errorMsg;
}

function addNewDoggoGuest(newDog) {
	let xhr = new XMLHttpRequest();
	
	xhr.open('POST', 'api/dog/newdog');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let dog = JSON.parse(xhr.responseText);
				displayOneDog(dog);
			}
			else {
				console.error('POST Req failed ' + xhr.status)
				displayError('Error adding new dog guest: ' + xhr.status);
			}
		}
	};

	xhr.setRequestHeader("Content-type", "application/json");
	let newJsonDog = JSON.stringify(newDog);
	xhr.send(newJsonDog);
}

function updateDoggoGuest(upDog) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', `api/updog/${'id'}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.readyState === 201) {
				let upDog = JSON.parse(xhr.responseText);
				/*	upDog. = `Current dog's name: ${upDog.name}`;*/
				displayOneDog(upDog);
			}
			else {
				console.error('POST Req failed ' + xhr.status)
				displayError('Error updating dog: ' + xhr.status);
			}
		}
	};

	xhr.setRequestHeader("Content-type", "application/json");
	let updogJsonDog = JSON.stringify(upDog);
	xhr.send(updogJsonDog);
}

function getDogById(id) {
	//	xhr stuff
	let xhr = new XMLHttpRequest();
/*	xhr.open('GET', `api/dog${dogId}`);*/
	xhr.open('GET', "api/dog/" + id);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let dogJson = xhr.responseText;
				let dog = JSON.parse(dogJson);
				displayOneDog(dog);
				/*displayListOfDogs(dogs);*/
			}
			else {
				displayError("Dog not found: " + id);
			}
		}
	}
	xhr.send();
};

function displayOneDog(dog) {
	let seeDogDiv = document.getElementById('dogDataDiv');
	seeDogDiv.textContent = '';

	let h2 = document.createElement('h2');
	document.createElement("h2");
	h2.textContent = dog.name;
	seeDogDiv.appendChild(h2);
	let dogDataArr = ["Breed: " + dog.breed, "Gender: " + dog.gender, "Birth Day: " + dog.birthDay, "Owner: " + dog.owner, "About: " + dog.description, "On-Site?: " + dog.onSite, "Needs Home: " + dog.adoptable, "Friendly: " + dog.isFriendly, "Fixed:" + dog.fixed, "Height: " + dog.height, "Weight: " + dog.weight, "Length: " + dog.length, "Health Notes: " + dog.healthNotes];
	for (let dogItem of dogDataArr) {
		let dogDataList = document.createElement('ul');
		seeDogDiv.appendChild(dogDataList);
		let listItem = document.createElement('li');
		listItem.textContent = dogItem;
		dogDataList.appendChild(listItem);

	}

}




