

function randomNumber(num){
 
    let random="";
    for(let i=0;i<num;i++){

         random+= Math.floor(Math.random()*num)
    }

    return random
}

console.log(randomNumber(4)); 