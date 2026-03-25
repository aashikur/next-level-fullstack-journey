// some 

const numbers = [ 1, 2, 4, 6, 10];
// if one of is contain then -> true or false
const hasEven = numbers.some(number => number % 2 === 0)
// console.log(hasEven);

const currentUserRoles = ["user", "editor", "admin"]
const featureAccessRoles = ["admin", "manager"]


const canAssess = currentUserRoles.some(role => featureAccessRoles.includes(role));

// console.log("Can Access: " + canAssess)



//-----------------------
// Array.form();

// const arr = Array.from({length : 5})
// console.log(arr);

//  arr.fill(null) // null , 0 , "" , 
//  console.log(arr)

//  const arr2 = Array.from({length: 5}, (_, i) => i);
//  console.log(arr2)

//  const arr3 = Array.from([2, 4, 6], (value, i) => value * value);
//  console.log(arr3)


const range = (start, stop, step) => 
    Array.from(
        {length: Math.ceil((stop - start)/step )},
        (_, i) => start + i * step
    )

console.log(range(0, 11, 1));    