
function sumOfCube(num){

    let sum=0;
    let temp=num;

    while(temp>0){
        let rem= temp%10;
       sum+=rem*rem*rem;
        temp= parseInt(temp/10);

    }

    console.log('sum of cubes are', sum);

   if(num===sum){
    console.log('it is a armstrong numnber');
   } else{
    console.log('it is a not a armstrong numnber');
   }
}



console.log(sumOfCube(153));



  