const backgroundElement = document.querySelector(".background")
const buttonElement = document.querySelector(".collapsible")

function onlyOne(checkbox, name) {
    var checkboxes = document.getElementsByName(name)
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

window.onload = function () {
    //console.log("HERE")
    //buttonElement.onclick = () => {console.log("something")}
    buttonElement.addEventListener("click", function() {
        console.log(backgroundElement.className)
        
        if(backgroundElement.className === "background") {
            backgroundElement.className = "background hidden" 
        } else if (backgroundElement.className === "background hidden") {
            backgroundElement.className = "background"
        }
    })
    
}
