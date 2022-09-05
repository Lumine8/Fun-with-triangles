var output = document.querySelector('#output');
var form = document.querySelector('.quiz-form');
var submitbtn = document.querySelector('#submit');

const correct_ans = [
    "90",
    "right angled",
    "one",
    "equilateral",
    "3 cm, 5 cm, 10 cm",
    "100",
    "a + b + c",
];

submitbtn.addEventListener("click",clickhandler = () =>{
    const formData = new FormData(form);
    let score = 0;
    let index = 0;
    for(let v of formData.values()){
        if(v == correct_ans[index]){
            score += 1;
        }
        index+=1;
    }
    //output.innerText = "The score is: "+score +" /7";
    alert("The score is: "+score +" /7");
});


/*function clickhandler(){

    const formData = new FormData(form);
    let score = 0;
    let index = 0;
    for(let v of formData.values()){
        if(v == correct_ans[index]){
            score += 1;
        }
        index+=1;
    }
    output.innerText = "The score is: "+score +" /7";
}*/
