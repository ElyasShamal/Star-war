let charecterBtn = document.getElementById("get-Characters");
// people url
let people_url = "https://www.swapi.tech/api/people/";
// planet url
let planet_url = "https://www.swapi.tech/api/planets/";

let next_person = 1;
let next_planet = 1;

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

const nextCharecter = () => {
  next_person += 1;
  getCharecters(people_url, next_person);
};

function hideLoader() {
  document.getElementById("loading").style.display = "none";
}

function ShowCharacters(data) {
  let tab = `<ul>
        <li>Name : ${data.name}</li>
        <li>Birth Year : ${data.birth_year}</li>
        <li>Eye Color :  ${data.eye_color}</li>
        <li>Gender : ${data.gender}</li>
		<li>Height : ${data.height}</li>
    </ul>`;

  document.getElementById("characters-data").innerHTML = tab;
}
