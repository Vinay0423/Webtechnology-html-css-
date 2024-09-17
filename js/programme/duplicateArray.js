function removeduplicateArray(arr){

     let uniqueArray=  [...new Set(arr)]
     console.log(uniqueArray);
}

removeduplicateArray([1,3,3,4,5,3,2,2,1])

