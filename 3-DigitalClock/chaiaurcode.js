// const clock = document.querySelector("#clock")


function timeChange() {
            
    const now = new Date();
    document.querySelector("#clock").innerHTML = now.toLocaleTimeString()
}

setInterval(timeChange,100)
    // }

