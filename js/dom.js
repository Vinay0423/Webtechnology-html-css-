
console.log(document);

console.log(document.head);

console.log(document.body);

console.log(document.URL);

console.log(document.baseURI);

// setTimeout(()=> {
//     console.log(document.title='Document object model');
// },3000)

//Dom methods
// 1. getelementbyid
// 2. getelementbyclass
// 3. getelementbytagname
// 4. queryselector
// 5. queryselectorall

// 1. getelementbyid

let id= document.getElementById('demo')

console.log(id.title);
console.log(id.style.color='red');
console.log(id.style.border='pink');
console.log(id.style.background='pink');
console.log(id.innerHTML='<h1> Good evening <h1>');// it will consider the tags in the string and acts with tag behvaiour
console.log(id.innerText='<h1> Good night <h1>'); //it will print tag as it is in string


// console.log(document.getElementById('demo1').innerText='inner text');
// console.log(document.getElementById('demo1').innerText='inner text2');


//2. getelementbyclass

let myclass= document.getElementsByClassName('test')

console.log(myclass);  //gives html elements in collection
myclass[0].style.background='green'
myclass[3].style.color='red'
myclass[2].style.background='orange'
console.log(myclass[1].innerText);


//3. getelementbytagname

let mytag= document.getElementsByTagName('section')

console.log(mytag);

//4.queryselector - selects only first matching element

// let myquery= document.querySelector('.test')
let myquery= document.querySelector('article')
console.log(myquery);
console.log(myquery.innerText);
console.log(myquery.style.background='blue');

//5. queryselectorall- selects all matching elements

let myqueryall= document.querySelectorAll('article')

console.log(myqueryall);
console.log(myqueryall[1]);


//creating html element by using js

let createEle= document.createElement('aside')  //it wll create aside element in console not in  html body
console.log(createEle);
createEle.innerText='royal challengers bengaluru'

let myPara= document.createElement('p')
console.log(myPara);
myPara.innerText=' escn '

createEle.appendChild(myPara) //added p tag inside aside tag

document.body.appendChild(createEle)   //added aside tag inside body 

//creating id and class inside created element

let ele1= document.createElement('div')
ele1.innerText='Newly created div'
document.body.appendChild(ele1)
ele1.id='divNew'  //id will added as attribute
ele1.classList='divNew-class' //class will added as attribute

let section= document.querySelector('section')
console.log(section);
section.style.background='yellow'  
// if style was given in html and js file, the js file style will takes as priority


//events

//1. onclick

// let button=document.createElement('button')
// button.innerText='Click Me'

// document.body.appendChild(button)

 function clickingButton(){
let btn=document.querySelector('button')
btn.innerText='button clicked'
}