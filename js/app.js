var a = document.querySelector("#Side1");
var b = document.querySelector("#Side2");
var c = document.querySelector("#Side3");
var calc = document.getElementById("calculate");
var output = document.querySelector("#output");



function addAngles(a,b,c){
    return a+b+c;
}   

function checkValidity(){
    console.log(a)
    if(addAngles(Number(a.value), Number(b.value), Number(c.value)) == 180){
        output.innerHTML="Forms a triangle";
    }
    else{
        output.innerHTML="does not forms a triangle";
    }
}

calc.addEventListener("click",checkValidity);