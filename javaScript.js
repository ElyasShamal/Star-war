let charecterBtn = document.getElementById("get-Characters");
// people url
let people_url = "https://www.swapi.tech/api/people/";
// planet url
let planet_url = "https://www.swapi.tech/api/planets/";

let next_person = 1;
let next_planet = 1;

// Defining async function
async function getCharecters(url, next) {
  // storing responce
  const response = await fetch(url + next);
  // storing data in form of JSON
  var returned_value = await response.json();
  let data = returned_value.result.properties;
  console.log(data);
  if (response) {
    hideLoader();
    ShowCharacters(data);
  }
}

// function to get the next person
const nextCharecter = () => {
  next_person += 1;
  getCharecters(people_url, next_person);
};

// Calling that async function
getCharecters(people_url, next_person);

// hideloader function
function hideLoader() {
  document.getElementById("loading").style.display = "none";
}

// Function to define innerHTML for div
function ShowCharacters(data) {
  let tab = `<ul>
        <li>Name : ${data.name}</li>
        <li>Birth Year : ${data.birth_year}</li>
        <li>Eye Color :  ${data.eye_color}</li>
        <li>Gender : ${data.gender}</li>
		<li>Height : ${data.height}</li>
    </ul>`;

  // Setting innerHTML as tab variable
  document.getElementById("characters-data").innerHTML = tab;
}

async function getPlanets(url, next) {
  // storing response
  const response = await fetch(url + next);

  // storing data in form of json
  var returned_value = await response.json();
  let data = returned_value.result.properties;
  console.log(data);
  if (response) {
    hideLoader();
  }

  showPlanets(data);
}

// function to get the next planet

function nextPlanet() {
  next_planet += 1;
  getPlanets(planet_url, next_planet);
}

// Function to define innerHTML for planet div

function showPlanets(data) {
  let tab = `<ul>
  <li>Name : ${data.name} </li>
  <li>Population : ${data.population}</li>
  <li>Diameter : ${data.diameter}</li>
  <li>Climate : ${data.climate}</li>
  <li>Gravity : ${data.gravity}</li>
  </ul>`;

  // Setting innerHTML as tab variable

  document.getElementById("planets_data").innerHTML = tab;
}

// Calling that async function

getPlanets(planet_url, next_planet);
