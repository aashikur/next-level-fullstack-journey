// sort

const number = [30, 399, 34, 66, 2, 5]

const sortedNumber = number.sort((a, b) => a - b) // ascending  
console.log(sortedNumber)

const sortedNumber2 = number.sort((a, b) => b - a) // descending 
console.log(sortedNumber2)

// localCompare ignore upperCase or LowerCase 
const fruits = ["Banana", "apple", "Cherry", "data"]
fruits.sort((a, b) => a.localeCompare(b))
console.log(fruits);


// flat array => flat complex array
const arr = [1 , 2, 4, [4, 5, 6] , [ 4 , [4 , 5, [ 3 , 5 , [ 4, 5]]]]]
const newArray = arr.flat(Infinity) // number for how layer need to flat or Infinity 
console.log(newArray)

const SmartArray = [...new Set ( arr.flat(Infinity))] // remove duplicate
SmartArray.sort( (a, b) => a - b); 
console.log(SmartArray);
