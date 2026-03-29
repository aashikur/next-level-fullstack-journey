/* 

some => does at least one element match condition. | Stop early when first condition meet. 

---------------------------------------------

array.some((element, index, array) => {
  return condition;
});

--------------------------------------------

for (let i = 0; i < array.length; i++) {
  if (condition) {
    return true; // stops immediately
  }
}
return false;

---------------------------------------------

*/
// 1. Check if any number is grater then 'target';*/
const hasGraterThenTarget = (arr, target) => {
    return arr.some(n => {
        // console.log(n, target, n > target)
        return n > target
    })
}
console.log('hasGraterThenTarget: ' + hasGraterThenTarget([1, 2, 3, 4], 5))


// 2. Check if any number is Negative;
const hasNegative = (nums) => {
    return nums.some(n => n < 0)
}
console.log('hasNegative: ', hasNegative([1, 3, 5]))


// 3. E-commerce - Invalid Cart
const cart = [
    { productId: 101, quantity: 2 },
    { productId: 102, quantity: 1 }
];
const isInvalid = (cart) => {
    return cart.some(c => c.quantity <= 0)
}
console.log('isInvalid: ' + isInvalid(cart))


// 4. User validation
const users = [
    { email: "a@gmail.com" },
    { email: "b@gmail.com" }
];
const emailExists = (users) => {
    return users.some(u => u.email === 'a@gmail.com');
}
console.log('emailExists: ' + emailExists(users))


// 5. Permission check
const roles = ["user", "moderator", "editor"];
const isAdmin = (roles) => {
    return roles.some(u => u === 'admin')
}
console.log('isAdmin: ' + isAdmin(roles))


// Other
// | Method     | Purpose                |
// | ---------- | ---------------------- |
// | `some()`   | ANY match → true/false |
// | `every()`  | ALL must match         |
// | `filter()` | return matching items  |
// | `find()`   | return first match     |


const nums = [1, 2, 3, 4];

// some - ANY match -> true/false
nums.some(n => n > 2); // true

// every - ALL Must Match
nums.every(n => n > 2); // false

// filter - return matching items
nums.filter(n => n > 2); // [3, 4]

// find - return the first match item
const list = [
    { id: 1, name: "Alice", active: true },
    { id: 2, name: "Bob", active: false },
    { id: 3, name: "Charlie", active: true }
];
list.find(l => l.id === 2) // { id: 2, name: "Bob", active: false }


/*
    find() → returns undefined if nothing found
    some() → returns false if nothing found
    filter() → returns [] (empty array)
*/
