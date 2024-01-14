const submit = document.querySelector("button")

submit.addEventListener("click", function (e) {
    e.preventDefault()
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    console.log(height,weight)
    console.log((weight/((height/100)**2)).toFixed(2))
    const bmi = (weight/((height/100)**2)).toFixed(2)
    if (bmi <18.6){
        results.innerHTML = `Your BMI is ${bmi} (Under Weight)`
    }
    else if (bmi>24.9){
        results.innerHTML = `Your BMI is ${bmi} (Over Weight)`
    }
    else{
        results.innerHTML = `Your BMI is ${bmi}`
        
    }

    
    
})