//Part 3: Deferred Execution
let primeHolder = document.getElementById('primeNumberHolder');

function isPrime(number){
    let isPrime = true
    for (let i=2; i<=Math.sqrt(number);i++){
        if (number%i==0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}
primeHolder.textContent="2;\n";

//without recursion
// for (let i=3; i<10000;i++){
//     if (isPrime(i)){
//         primeHolder.textContent+=`${i}\n;`;
//     }
// }
// setTimeout (() => alert ('Calculating primes to 10000 done.'),350); //because 300 is not enought time to draw the html in my case


//with recursion
function calculateNextPrime(num) {
    if (num>10000){
        alert ('Calculating primes to 10000 done.');
        return;
    }
    while (!isPrime(num)){
        num++;        
    }    
    primeHolder.textContent+=`${num};\n`;
    setTimeout(() => calculateNextPrime(++num),0); //() => anonimous function to make a delay
}
calculateNextPrime(3);