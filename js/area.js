var a = document.querySelector("#Side1");
var b = document.querySelector("#Side2");

var calc = document.getElementById("calculate");
var output = document.querySelector("#output");

calc.addEventListener("click",hypotenuse)

function calculate(a,b){
    return (a*b)/2;
}

function hypotenuse(){
    output.innerHTML = "The Hypotenuse of the triangle is: " + calculate(parseInt(a.value),parseInt(b.value))
}