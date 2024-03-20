//sum of all numbers in array using iife function
(function join(abc){
    let sum = 0
    for(i=0;i<abc.length;i++){
     sum += abc[i]
 }
    console.log(sum)
 })([1,4,7,8,6,0,3])

 // sum of all numbers in array using annouymus function

 let array = function(add){
 let sum = 0
    for(i=0;i<add.length;i++)
     sum += add[i]
    console.log(sum)
    }

    array([5,5,5,5,5])

// sum of all numbers in array using arrow function

let adds = (adds)=>{
        let sum = 0
           for(i=0;i<adds.length;i++)
            sum += adds[i]
        {
           console.log(sum)
         
            }
        }
adds([4,4,4,4,4])


 
let array1 = [1, 2, 3, 4, 5];
let three = 3;

(function (arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let temp = arr.pop(); // Corrected to invoke pop() to remove the last element
        arr.unshift(temp); // Add the removed element to the beginning of the array
    }
})(array1, three);

console.log(array1); // Output the rotated array




