const body = document.querySelector("body");
const button = document.querySelectorAll(".button");

button.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (["grey", "green", "yellow", "blue"].includes(e.target.id)) {
      body.style.backgroundColor = e.target.id;
    }
  });
});
