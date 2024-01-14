const table = document.querySelector(".tabl")
const event = document.querySelector(".event")
const key = document.querySelector(".key")
const keyCode = document.querySelector(".keyCode")
document.addEventListener("keydown",function (e) {
  event.innerHTML = e.type
  key.innerHTML = e.key
  keyCode.innerHTML = e.code
  table.removeAttribute("hidden")
})