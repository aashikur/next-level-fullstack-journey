// some | array | includes

const currentUserRoles = ["user", "editor", "admin"]
const featureAccessRoles = ["admin", "manager"]

const canAccess = currentUserRoles.some(role => featureAccessRoles.includes(role)); // true
// console.log('canAccess: ' + canAccess); 


//  Building Array from NOTHING
const arr = Array.from({ length: 5 }) // [ undefined, undefined, undefined, undefined, undefined ]
const arr2 = Array.from({ length: 5 }, (_, i) => i)  // [ 0, 1, 2, 3, 4 ]


// Includes
// array.includes(value, startIndex?)

const x = [1, 2, 3].includes(2); // true
const y = [1, 2, 3].includes(5); // false
const z = [3, 4, 7, 20].includes(1, 3) // false -> reason start at index 1(4) and after no 3. 

/*
Question :  
==========================================================================================
You are building a dashboard.
You need to show only users who are allowed to access a feature AND meet some conditions.

const users = [
  { id: 1, name: "Alice", roles: ["user"], active: true },
  { id: 2, name: "Bob", roles: ["editor"], active: true },
  { id: 3, name: "Charlie", roles: ["admin"], active: false },
  { id: 4, name: "David", roles: ["user", "manager"], active: true },
  { id: 5, name: "Eve", roles: ["guest"], active: true }
];
const allowedRoles = ["admin", "manager"];

write a function
function getAccessibleUsers(users, allowedRoles) {}

Conditions
A user is included if:
1. User is 'active'
2. User has at least one role in 'allowedRoles'

Output:
[
  { id: 4, name: "David", roles: ["user", "manager"], active: true }
]
==========================================================================================
*/


const users = [
  { id: 1, name: "Alice", roles: ["user", "admin"], active: true },
  { id: 2, name: "Bob", roles: ["editor"], active: true },
  { id: 3, name: "Charlie", roles: ["admin"], active: false },
  { id: 4, name: "David", roles: ["user", "manager"], active: true },
  { id: 5, name: "Eve", roles: ["guest"], active: true }
];
const allowedRoles = ["admin", "manager"];

const getAccessibleUsers = (users, allowedRoles) => {
  return users.filter(({active, roles}) =>
    active &&
    roles.some(r => allowedRoles.includes(r)));

}

console.log(getAccessibleUsers(users, allowedRoles))