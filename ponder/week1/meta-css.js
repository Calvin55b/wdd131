
const PI = 3.14;
let radius = 3;

let area = radius*radius*PI

console.log(area);
radius = 20;
                
area = area* radius*PI;

console.log(area);

const one =1; 
const two =2;

let result = one * two;

console.log(result);


let course = "CSE131";

if (true){
    let student = "John";
    console.log(course);
    console.log(student);
}

console.log(course);


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById(codeValue).style.color = "red";
})

const image = document.querySelector('img');
image.setAttribute('src', 'css_html_jss.jpeg');
image.setAttribute('alt', 'new logo with black background');

document.body.className = 'blue';
