//Return all the prime numbers in an array using IIFE function

(function(){
    function isPrime(num){
    if  ( num <= 1){
    return false
    }
for (i=2;i<num;i++){
    if (num%i===0){
    return false 
}
}

return true;

}
let numbersToCheck = [1, 2, 3, 4, 5, 6,7, 8];
    for (let num of numbersToCheck) {
        console.log(num + ' is prime? ' + isPrime(num));
    }
})()

//Return all the prime numbers in an array using annonymus function

let isPrime = function(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

let numbersToCheck = [1, 2, 3, 4, 5, 6,7, 8];

for (let num of numbersToCheck) {
    if (isPrime(num)) {
        console.log(num);
    }
}

//Return all the prime numbers in an array using arrow function


let value = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let num of numbers) {
    if (value(num)) {
        console.log(num);
    }
}


// Remove duplicates from an array using iife function

let uniqueArray = (function(arr) {
    return Array.from(new Set(arr));
})([1, 2, 3, 4, 4, 5, 6, 6, 8, 9, 9]);

console.log(uniqueArray);

// Remove duplicates from an array using annonymus function

let uniqueeArray = function(arr) {
    return Array.from(new Set(arr));
}

let array = [1, 2, 2, 4, 4, 5, 6, 7, 8, 8, 9];
let resultArray = uniqueeArray(array);
console.log(resultArray);

// Remove duplicates from an array using arrow function

let uniqueeeArray = (arr) => {
    return Array.from(new Set(arr));
};

let array1 = [1, 2, 2, 4, 4, 5, 6, 7, 8, 8, 9];
let resultArray1 = uniqueeeArray(array);
console.log(resultArray);