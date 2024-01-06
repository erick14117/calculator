// Write a function that takes an array of numbers and returns the biggest number.

let number = [5,10,15,60,8, 75] 
let maxNum = 0 
//[1]

let size = number.length
//[2]

for(i=0; i<size;i++){
  if(maxNum<number[i]){
    maxNum = number[i]
  }
  
}//[3] 

console.log(maxNum)

let max = Math.max(5,10,15,60,8,90)

console.log(max)




let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countvar = count + " - ";
  saveEl.textContent += countvar;
  console.log(count);
  countEl.textContent = 0;
  count = 0
}




//[1]Zero because you should start with zero. 

//[2]"lenght" is a javscript function that returns the number of elements in an array.

//[3] The "i" in the for starts in 0 because thats the first number/position in the array. In the first "if" condition, the "i" inside [i] is the current position in the array.