//Rotate an array by k times in iife functions
let array1 = [1, 2, 3, 4, 5]
    let three = 3; 
(function (arr, rotations) {
    
    for (let i =0 ; i< rotations; i++){
     let temp = arr.pop()
    arr.unshift(temp)
    }
})(array1, three)

console.log(array1)


//Rotate an array by k times in annoymus  functions
let array2 = [1, 2, 3, 4, 5]
    let two = 2; 
let anon_func = function (arr, rotations) {
    
    for (let i =0 ; i< rotations; i++){
     let temp = arr.pop()
    arr.unshift(temp)
    }
}
anon_func(array2, two)

console.log(array2, two)



//Palindrome using annoyumu function

let array3 = ["level", "hello", "racecar", "world", "Madam", "12321"];

let palindromesAnonymous = function(arr) {
    let palindromes = [];

    arr.forEach(function(element) {
        if (element.toLowerCase() === element.toLowerCase().split('').reverse().join('')) {
            palindromes.push(element);
        }
    });

    return palindromes;
};

console.log(palindromesAnonymous(array3));


//Palidrome in IIFE function
let array4 = ["level", "hello", "racecar", "world", "Madam", "12321"];

let palindromesIIFE = (function(arr) {
    let palindromes = [];

    arr.forEach(function(element) {
        if (element.toLowerCase() === element.toLowerCase().split('').reverse().join('')) {
            palindromes.push(element);
        }
    });

    return palindromes;
})(array4);

console.log(palindromesIIFE);

// arrow function 
let array = ["level", "hello", "racecar", "world", "Madam", "12321"];

let palindromesArrow = arr => {
    let palindromes = [];

    arr.forEach(element => {
        if (element.toLowerCase() === element.toLowerCase().split('').reverse().join('')) {
            palindromes.push(element);
        }
    });

    return palindromes;
};

console.log("Palindromes (Arrow Function):", palindromesArrow(array));

// median anonymous func
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];

let medianAnonymous = function(arr1, arr2) {
    let length = arr1.length;

    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort((a, b) => a - b);

    return (sortedArray[Math.floor(length / 2)] + sortedArray[Math.floor(length / 2) - 1]) / 2;
};

console.log( medianAnonymous(arr1, arr2));

// 
let arr3 = [1, 3, 5, 7, 9];
let arr4 = [2, 4, 6, 8, 10];

let medianIIFE = (function(arr1, arr2) {
    let length = arr1.length;

    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort((a, b) => a - b);

    return (sortedArray[Math.floor(length / 2)] + sortedArray[Math.floor(length / 2) - 1]) / 2;
})(array1, array2);

console.log( medianIIFE);




