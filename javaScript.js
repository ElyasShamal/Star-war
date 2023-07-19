let charecterBtn = document.getElementById("get-Characters");
charecterBtn.addEventListener("click", () => {
  fetch("https://www.swapi.tech/api/people/1")
    .then((res) => res.json())
    .then((data) => console.log(data));
});
