function randomString(length){

    let randomString=''
    let alpha=['a','b','c','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','r','s']
    for(let i=0;i<length;i++){

       let randomNumber = Math.floor(Math.random()*length)
      randomString+= alpha[randomNumber]
   }

   return randomString
}

console.log(randomString(2));
