
//Tzach Mordechai. 
//Ex9-Prime Numbers
//Input: Positive number
//Output: All the prime numbers between 1 and the number unserted.
//Using the sieve of Eratosthenes for finding all prime numbers up to any given limit.

        let readlineSync = require('readline-sync');
        let InputNumber = parseInt(readlineSync.question('Please enter a positive number: ')) ; 
        InputNumber+=1; // to have an array till the number the user inserted. 
        let PrimeArray = new Array(InputNumber);                     

        //Starting with 2 and assiging values to all numbers that devid with 2: 4,6,8,10... then index=3 and assinging values to cells 6,9,12...
        //All cells with a numbers assigned are not prime
        for ( let Index=2 ;Index<InputNumber;Index+=1){     
            for (let i=2*Index;i<InputNumber;i+=Index){      //
                PrimeArray[i] = false; //If the number is a multiple of the smaller number, then the number is not a prime number. 
            }
        }

       for (i=2; i<InputNumber ; i+=1){  //Print the prime numbers. 
        ( PrimeArray[i] !== false) ? console.log(i) : 1;  //if no value in the cell, it's a prime number
       }


        
       