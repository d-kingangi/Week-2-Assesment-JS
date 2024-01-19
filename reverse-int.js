// Given an integer, return an integer that is reverse ordering the numbers 

let num = 78906 

let numStr = num.toString() 

let reversedInt = ' ' 

let n = 0 

for(num of numStr){ 
    reversedInt = reversedInt + numStr[numStr.length -1 -n] 
    n++ 
} 

console.log(reversedInt) 