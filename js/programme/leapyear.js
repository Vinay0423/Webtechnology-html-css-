function leapyear(year){


    if((year%400===0)|| ((year%4===0)&&(year%100!==0))){
        console.log(' it is a leap year',year);
    } else{
        console.log('it is not a leap year',year);
    }
    

 console.log(new Date(year,1,29).getDate()); 
}

leapyear(2000)