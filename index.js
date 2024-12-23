// document.getElementById("count-pe").innerText = 5;
let count = 0;
let txt = document.getElementById("entry")
let setZero = document.getElementById("count-pe")

function increase() {
    count++;
     document.getElementById("count-pe").innerText = `${count}`
}
 function save(){

    const cnt = count +  " - "
    txt.textContent +=  cnt 
    count = 0;
    setZero.innerText = count
    
}






// document.getElementById("increment-btn").onclick = increase;