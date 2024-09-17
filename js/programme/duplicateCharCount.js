
// function duplicateCharCount(str){

//     let obj={}
//     let duplicates=[]
   
//     for(chr of str){
//        obj[chr]? obj[chr]++: (obj[chr]=1)
//     }

//     for (const chr in obj) {
//         if(obj[chr]>1){
//           duplicates.push(chr,obj[chr])
//         }
//     }

//     console.log(duplicates);
// }

// duplicateCharCount('hello world')


function duplicateChar(){

    let str='hello world'

  let charCount=  str.split('').reduce((acc,value)=> {
          acc[value]= (acc[value]||0)+1
          return acc;
    },{})

    console.log(charCount);
}

duplicateChar()