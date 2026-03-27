
// ### 2. User Activity Feed Join
// **Description:**
// Combine two arrays: users and activities. Each activity has a userId. Produce an array of users, each with their activities attached as a property.

// **Function Signature:**
// ```javascript
// function joinUserActivities(users, activities): Array
// ```

// **Example Input:**
// ```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const activities = [
  { userId: 1, action: "login", timestamp: "2025-01-10T10:00:00Z" },
  { userId: 2, action: "login", timestamp: "2025-01-10T11:00:00Z" },
  { userId: 1, action: "view", timestamp: "2025-01-10T10:05:00Z" },
  { userId: 3, action: "logout", timestamp: "2025-01-10T12:00:00Z" },
  { userId: 6, action: "logout", timestamp: "2025-01-10T12:00:00Z" },
];

// ```

// **Expected Output:**
// ```javascript
// [
//   {
//     id: 1,
//     name: "Alice",
//     activities: [
//       { userId: 1, action: "login", timestamp: "2025-01-10T10:00:00Z" },
//       { userId: 1, action: "view", timestamp: "2025-01-10T10:05:00Z" }
//     ]
//   },
//   {
//     id: 2,
//     name: "Bob",
//     activities: [
//       { userId: 2, action: "login", timestamp: "2025-01-10T11:00:00Z" }
//     ]
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     activities: [
//       { userId: 3, action: "logout", timestamp: "2025-01-10T12:00:00Z" }
//     ]
//   }
// ]
// ```

// **Constraints:**
// - Users can have 0 to N activities
// - Skip activities with no matching user
// - Preserve user order

// **Difficulty:** Medium | **Topics:** `map`, `reduce`, denormalization


const TotalActivities = activities.reduce((table, activity) => {
    const {userId} = activity;
    if(!table[userId]) {
        table[userId] = []
    }
    table[userId].push(activity);
    return table
}, {})
// console.log(TotalActivities[1])

const userWithActivities = users.map(user => {
    return {
        ...user,
        activities : TotalActivities[user.id] || []
    }    
})


// Those 2 method can solve [Object , Object ] problem.
// console.log(JSON.stringify(userWithActivities, null , 2 ))
// console.dir(userWithActivities, {depth: null})

console.log(userWithActivities);