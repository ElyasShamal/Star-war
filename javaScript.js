let charecterBtn = document.getElementById("get-Characters");
let randomCharecter = Math.round(Math.random() * 80);
charecterBtn.addEventListener("click", () => {
  fetch(`https://www.swapi.tech/api/people/${randomCharecter}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
