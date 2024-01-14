var inter;

const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
function randColors() {
  const randomNumber = Math.floor(Math.random() * 256); // Includes 0 to 255
  const adjustedRandomNumber = randomNumber > 0 ? randomNumber : 1;
  return adjustedRandomNumber;
}
function ChangeColor() {
  let red = randColors()
  let green = randColors()
  let blue = randColors()

  console.log(red, green, blue);
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`
}
start.addEventListener("click", function () {
  inter = setInterval(ChangeColor, 500)
})
stop.addEventListener("click", function () {
    clearInterval(inter)
  })
