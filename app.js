console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


//Exercise 1 Section
for (let i = 1; i < 100; i++){
    if(i % 2 == 0){
        continue;
     } else{
                console.log(i)
            }
    }
 //Exercise 2 Section
 for (let i = 1; i < 100; i++)
{
    console.log(i);
    if (i % 3 == 0 && i % 5 == 0)
         {
        console.log('FIZZBUZZ')
         }  
    {
    if (i % 3 == 0 ){
        console.log('FIZZ')
    }
    if (1 % 5 == 0){
        console.log('BUZZ')
    }
    
    }
}
 
 //Exercise 3 Section
 let i = 1;  
    while(i <= 100){
    let output ="";

        if (i % 3 == 0 ){
            output += "FIZZ"
        }

        if (i % 5 == 0 ){
            output += "BUZZ"
        }
        console.log(`${i} ${output}`);
        i++;
    } 


    let a = 1;
    do{
        let output ="";

        if (a % 3 == 0 ){
            output += "FIZZ"
        }

        if (a % 5 == 0 ){
            output += "BUZZ"
        }
        console.log(`${a} ${output}`);
        a++;
      }
     while (a <=100);
     
 //Exercise 4 Section
     let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
    let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
    for (let c = 0; c <= n; c++) {
        if (c === value) {
            console.log(`Found value! ${value}!`);
            break;
        }
        if (c === n) {
            console.log(`Did not find value ${value} with  1-${n}..`);
        }
    }
    //Exercise 5 Section
    let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
    let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
    let start = Math.round(Math.random() * (10 - 1) + 1); // creates a random number between 1 and 10
    let end = Math.round(Math.random() * (1000 - 100) + 100); // creates a random number between 100 and 1000
    
    for (let i = start; i <= end; i++) {
        if (i % fizzDivisor === 0 && i % buzzDivisor === 0) {
            console.log("FIZZBUZZ");
        } else if (i % fizzDivisor === 0) {
            console.log("FIZZ");
        } else if (i % buzzDivisor === 0) {
            console.log("BUZZ");
        } else {
            console.log(i);
        }
    }