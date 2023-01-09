//function increment () {
    //console.log("the button was clicked")
//}

let count = 0 ;
let countel = document.getElementById("count-el")
let saveEL = document.getElementById("save-el")


function  increment() {
    count += 1
    countel.innerText = count
  
}

function save() {
    countstr = count + " - " 
    saveEL.textContent += countstr
    countel.textContent = 0
    count = 0
    console.log(count)
    
}


