// Write a function that takes an array of numbers and returns the biggest number.

let number = [5,10,15,60,8] 
let maxNum = 0 
//Zero because you should start with zero. 

let size = number.length
//"lenght" is a javscript function that returns the number of elements in an array.

for(i=0; i<size;i++){
  if(maxNum<number[i]){
    maxNum = number[i]
  }
  
}//The "i" in the for starts in 0 because thats the first number/position in the array.
// In the first "if" condition, the "i" inside [i] is the current position in the array.

console.log(maxNum)

let max = Math.max(5,10,15,60,8)

console.log(max)