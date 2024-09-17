
let count=0;

//select values and buttons
const value=document.getElementById('value');
const btns=document.querySelectorAll('.btn ')

btns.forEach((btn)=> {
btn.addEventListener("click",(e)=> {
const btnType= e.currentTarget.classList
if(btnType.contains('decrease')){
   count--;
} else if(btnType.contains('increase')){
    count++;
}
else {
    count=0;
}
value.textContent=count
if(count>0){
    value.style.color='green'
} else if(count<0){
    value.style.color='red'
} else{
    value.color='black'
}
})

})