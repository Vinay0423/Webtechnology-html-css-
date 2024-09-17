function vowelsValidation(str){


    const regex=/[aeiou]/g;
    //it will check wheter a string has vowls or not and return true or false
    // return regex.test(str.toLowerCase());

     // Find all vowels in the string
    const vowels= str.match(regex);

     // If no vowels found, return an empty array
    return vowels;
}

console.log(vowelsValidation('vinaa yyy'));


['a','a'].forEach()
['a','a'].map()