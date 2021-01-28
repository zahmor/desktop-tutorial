
//Tzach Mordechai. 
//Ex8 - BOOM
//Input: No input
//Output: Prints all of the numbers between 0 and 100: 
        //For every number that is divisible by 7 or has the digit 7 print ‘boom’.
        //In every other case – print the number itself. Example: 1,2,3,4,5,6, BOOM,8,9,10,11,12,13,BOOM,15,16,BOOM,18

let BoomArray=[];
for (let i=1; i<=100 ; i+=1){
    (i%7===0 || i.toString().includes('7') ) ? BoomArray.push('BOOM') : BoomArray.push(i) ;  
}  
console.log(BoomArray.join(',') );
