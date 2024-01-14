
let trials = 10
function getRandom() {
  return (Math.floor(Math.random() * 100) + 1)
  // return 30
}

let ran = getRandom()
console.log(ran)

const submit = document.querySelector("#subt")

submit.addEventListener("click", function (e) {
  e.preventDefault()
  const guess = parseInt(document.querySelector("#guessField").value)
  const res = document.querySelector(".lowOrHi")
  const prev = document.querySelector(".guesses")
  const pr = document.querySelector(".pr")
  const remaining_guess = document.querySelector(".lastResult")
  if (guess === ran) {
    res.innerHTML = "You Guessed it Right"
  }
else if (trials>=1) {
  if (guess>ran) {
    res.innerHTML= "The number is lower"
    prev.innerHTML = guess
    trials = trials - 1
    remaining_guess.innerHTML = trials
    
  }
  if (guess<ran) {
    
    res.innerHTML= "The number is Higher"
    prev.innerHTML = guess
    trials = trials - 1
    remaining_guess.innerHTML = trials
  }
    prev.innerHTML = guess
  }
  else{
    pr.remove()
    res.remove()
    remaining_guess.innerHTML = "Over <br><button>Reset</button>"
  }
})


