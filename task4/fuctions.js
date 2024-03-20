// Print odd numbers in array using IIFE Function
//IIFE
(function Printodd(arr){
    for ( i=0;i<arr.length;i++) {
        if (arr[i] % 2 != 0){
        console.log(arr[i])
    }
    }
 })([1,2,3,4,5,6,7,8,9])

 //Print odd numbers in array using annoymus function

let printODDnumbers = function(arr){
    for ( i=0;i<arr.length;i++) {
        if (arr[i] % 2 != 0)
        console.log(arr[i])
    
    }
    }
    printODDnumbers([1,3,6,8,2,9,7])

//Print odd numbers in array using  arrow function

let printoddnumber = ()=> {
    for ( i=0;i<arr.length;i++) {
        if (arr[i] % 2 != 0){
        console.log(arr[i])
        }
    }
}
printODDnumbers([1,3,6,8,2,9,7])

//Convert all the string to title caps in the sring array using IIFE FUNCTION

var a= (function (str) {
    //var lowertext = "hello guvi";
    return str.toUpperCase()

 })("hello guvi");
  console.log(a)


//Convert all the string to title caps in the sring array using annoymus function

 let uppercase = function(str)
 {
        return str.toUpperCase()
    }("hello guvi")
    
        console.log(uppercase)


//Convert all the string to title caps in the sring array using arrow function

let Uppercase = (str => str.toUpperCase())
("hello guvi")

console.log(Uppercase)



//sum of all numbers in array using iife function

 (function join(abc){
    let sum = 0
    for(i=0;i<abc.length;i++){
     sum += abc[i]
 }
    console.log(sum)
 })([1,4,7,8,6,0,3])

