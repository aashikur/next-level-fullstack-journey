# JavaScript Practice & Interview Prep
## Advanced Level - Map, Reduce, Some, Denormalization & Data Binning

---

## 1. REAL-WORLD PROBLEMS (10 Problems)

### 1. Product Inventory Aggregator
**Description:**
Given an array of product sales (with productId, quantity, and date), aggregate total quantity sold per product for a dashboard display.

**Function Signature:**
```javascript
function aggregateSales(sales: Array<{productId: number, quantity: number, date: string}>): Object
```

**Example Input:**
```javascript
const sales = [
  { productId: 101, quantity: 5, date: "2025-01-10" },
  { productId: 102, quantity: 3, date: "2025-01-10" },
  { productId: 101, quantity: 2, date: "2025-01-11" },
  { productId: 103, quantity: 8, date: "2025-01-11" },
  { productId: 102, quantity: 4, date: "2025-01-12" }
];
```

**Expected Output:**
```javascript
{
  101: 7,
  102: 7,
  103: 8
}
```

**Constraints:**
- 1 ≤ sales.length ≤ 10,000
- 1 ≤ quantity ≤ 1000
- productId is unique per product

**Difficulty:** Medium | **Topics:** `reduce`, aggregation, lookup table

---

### 2. User Activity Feed Join
**Description:**
Combine two arrays: users and activities. Each activity has a userId. Produce an array of users, each with their activities attached as a property.

**Function Signature:**
```javascript
function joinUserActivities(users, activities): Array
```

**Example Input:**
```javascript
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

const activities = [
  { userId: 1, action: "login", timestamp: "2025-01-10T10:00:00Z" },
  { userId: 1, action: "view", timestamp: "2025-01-10T10:05:00Z" },
  { userId: 2, action: "login", timestamp: "2025-01-10T11:00:00Z" },
  { userId: 3, action: "logout", timestamp: "2025-01-10T12:00:00Z" }
];
```

**Expected Output:**
```javascript
[
  {
    id: 1,
    name: "Alice",
    activities: [
      { userId: 1, action: "login", timestamp: "2025-01-10T10:00:00Z" },
      { userId: 1, action: "view", timestamp: "2025-01-10T10:05:00Z" }
    ]
  },
  {
    id: 2,
    name: "Bob",
    activities: [
      { userId: 2, action: "login", timestamp: "2025-01-10T11:00:00Z" }
    ]
  },
  {
    id: 3,
    name: "Charlie",
    activities: [
      { userId: 3, action: "logout", timestamp: "2025-01-10T12:00:00Z" }
    ]
  }
]
```

**Constraints:**
- Users can have 0 to N activities
- Skip activities with no matching user
- Preserve user order

**Difficulty:** Medium | **Topics:** `map`, `reduce`, denormalization

---

### 3. E-commerce Cart Validation
**Description:**
Check if ANY item in cart is out of stock. Return true if validation fails (out of stock found).

**Function Signature:**
```javascript
function hasOutOfStockItem(cart, inventory): boolean
```

**Example Input:**
```javascript
const cart = [
  { productId: 101, quantity: 2 },
  { productId: 102, quantity: 1 },
  { productId: 103, quantity: 5 }
];

const inventory = [
  { productId: 101, stock: 10 },
  { productId: 102, stock: 0 },
  { productId: 103, stock: 3 }
];
```

**Expected Output:**
```javascript
true  // Product 102 out of stock, Product 103 insufficient stock
```

**Constraints:**
- cart.length ≤ 100
- Missing products treated as out of stock
- quantity > stock means out of stock

**Difficulty:** Easy | **Topics:** `some`, `map`, validation

---

### 4. API Response Normalization
**Description:**
Flatten nested API response into flat lookup table for O(1) access by ID.

**Function Signature:**
```javascript
function normalizeCategoryData(data): Object
```

**Example Input:**
```javascript
const apiData = [
  {
    id: "cat-1",
    name: "Electronics",
    subcategories: [
      { id: "sub-1", name: "Phones" },
      { id: "sub-2", name: "Laptops" }
    ]
  },
  {
    id: "cat-2",
    name: "Clothing",
    subcategories: [
      { id: "sub-3", name: "Shirts" }
    ]
  }
];
```

**Expected Output:**
```javascript
{
  "cat-1": { id: "cat-1", name: "Electronics", type: "category" },
  "cat-2": { id: "cat-2", name: "Clothing", type: "category" },
  "sub-1": { id: "sub-1", name: "Phones", type: "subcategory" },
  "sub-2": { id: "sub-2", name: "Laptops", type: "subcategory" },
  "sub-3": { id: "sub-3", name: "Shirts", type: "subcategory" }
}
```

**Difficulty:** Medium | **Topics:** `reduce`, flatten, lookup table

---

### 5. Time Series Event Binning
**Description:**
Group timestamped events into 1-hour bins and count events per bin.

**Function Signature:**
```javascript
function binEventsByHour(events): Object
```

**Example Input:**
```javascript
const events = [
  { timestamp: "2025-01-10T10:15:00Z", type: "click" },
  { timestamp: "2025-01-10T10:45:00Z", type: "click" },
  { timestamp: "2025-01-10T11:20:00Z", type: "scroll" },
  { timestamp: "2025-01-10T11:55:00Z", type: "click" },
  { timestamp: "2025-01-10T12:30:00Z", type: "scroll" }
];
```

**Expected Output:**
```javascript
{
  "2025-01-10T10:00:00Z": 2,
  "2025-01-10T11:00:00Z": 2,
  "2025-01-10T12:00:00Z": 1
}
```

**Difficulty:** Medium | **Topics:** `reduce`, time manipulation, binning

---

### 6. Social Media Like Aggregator
**Description:**
Aggregate total likes per post. Each event represents one user liking a post.

**Function Signature:**
```javascript
function aggregateLikes(likes): Object
```

**Example Input:**
```javascript
const likes = [
  { postId: 1, userId: 101 },
  { postId: 1, userId: 102 },
  { postId: 2, userId: 101 },
  { postId: 1, userId: 103 },
  { postId: 3, userId: 102 }
];
```

**Expected Output:**
```javascript
{ 1: 3, 2: 1, 3: 1 }
```

**Constraints:** Duplicate likes counted separately | All likes are valid

**Difficulty:** Easy | **Topics:** `reduce`, aggregation

---

### 7. User Permissions Checker
**Description:**
Check if user has access to feature using lookup table for O(1) access.

**Function Signature:**
```javascript
function hasPermission(user, permissions, feature): boolean
```

**Example Input:**
```javascript
const user = { id: 1, roleId: 5 };
const permissions = [
  { roleId: 5, feature: "dashboard" },
  { roleId: 5, feature: "analytics" },
  { roleId: 3, feature: "profile" }
];
const featureToCheck = "analytics";
```

**Expected Output:**
```javascript
true
```

**Constraints:** One permission per (roleId, feature) pair | Missing role returns false

**Difficulty:** Easy | **Topics:** `map`, `reduce`, lookup table

---

### 8. Dashboard Widget Data Join
**Description:**
Join metrics from two different APIs by widgetId. Include unmatched entries.

**Function Signature:**
```javascript
function joinWidgetMetrics(metricsA, metricsB): Array
```

**Example Input:**
```javascript
const metricsA = [
  { widgetId: 1, views: 1200 },
  { widgetId: 2, views: 850 }
];

const metricsB = [
  { widgetId: 1, clicks: 45 },
  { widgetId: 2, clicks: 32 },
  { widgetId: 3, clicks: 60 }
];
```

**Expected Output:**
```javascript
[
  { widgetId: 1, views: 1200, clicks: 45 },
  { widgetId: 2, views: 850, clicks: 32 },
  { widgetId: 3, views: undefined, clicks: 60 }
]
```

**Difficulty:** Medium | **Topics:** `map`, denormalization, joining arrays

---

### 9. Order Status Summary
**Description:**
Aggregate and count orders by status (pending, shipped, delivered).

**Function Signature:**
```javascript
function summarizeOrderStatus(orders): Object
```

**Example Input:**
```javascript
const orders = [
  { id: 1, status: "pending" },
  { id: 2, status: "shipped" },
  { id: 3, status: "pending" },
  { id: 4, status: "delivered" },
  { id: 5, status: "shipped" },
  { id: 6, status: "delivered" },
  { id: 7, status: "delivered" }
];
```

**Expected Output:**
```javascript
{ pending: 2, shipped: 2, delivered: 3 }
```

**Constraints:** Valid statuses: "pending", "shipped", "delivered" | Include unknown statuses

**Difficulty:** Easy | **Topics:** `reduce`, aggregation

---

### 10. Real-Time Notification Binning
**Description:**
Bin notifications into 10-minute intervals for live activity chart.

**Function Signature:**
```javascript
function binNotificationsByInterval(notifications, intervalMinutes = 10): Object
```

**Example Input:**
```javascript
const notifications = [
  { timestamp: "2025-01-10T10:05:00Z", type: "message" },
  { timestamp: "2025-01-10T10:12:00Z", type: "alert" },
  { timestamp: "2025-01-10T10:23:00Z", type: "message" },
  { timestamp: "2025-01-10T10:38:00Z", type: "alert" },
  { timestamp: "2025-01-10T11:02:00Z", type: "message" }
];
```

**Expected Output:**
```javascript
{
  "2025-01-10T10:00:00Z": 2,
  "2025-01-10T10:10:00Z": 1,
  "2025-01-10T10:20:00Z": 1,
  "2025-01-10T10:30:00Z": 1,
  "2025-01-10T11:00:00Z": 1
}
```

**Difficulty:** Medium | **Topics:** `reduce`, time manipulation, binning

---

## 2. INTERVIEW QUESTIONS (10 Questions)

### Q1. Map vs Reduce vs Some
**Question:** Explain the difference between `map`, `reduce`, and `some` with real-world examples. When would you use each?

**Expected Answer Points:**
- `map`: Transform each element → new array (same length)
- `reduce`: Combine elements → single value
- `some`: Returns boolean if ANY element passes test

**Code Example:**
```javascript
const prices = [10, 20, 30];

// map - transform
const doubled = prices.map(p => p * 2);  // [20, 40, 60]

// reduce - aggregate
const total = prices.reduce((sum, p) => sum + p, 0);  // 60

// some - test ANY
const hasExpensive = prices.some(p => p > 25);  // true
```

**Difficulty:** Easy | **Follow-up:** When would `every` be used instead of `some`?

---

### Q2. Denormalizing Arrays
**Question:** How would you denormalize two related arrays (e.g., users and posts) into a single array? Explain the algorithm.

**Expected Answer Points:**
- Create lookup table from second array using `reduce`
- Use `map` to iterate first array
- Attach matching items from lookup using spread operator

**Code Sample Expected:**
```javascript
const postByUserID = posts.reduce((acc, post) => {
  if (!acc[post.userId]) acc[post.userId] = [];
  acc[post.userId].push(post);
  return acc;
}, {});

const usersWithPosts = users.map(user => ({
  ...user,
  posts: postByUserID[user.id] || []
}));
```

**Difficulty:** Medium | **Follow-up:** How would you handle users with no posts?

---

### Q3. Group by Property
**Question:** Write a function to group an array of objects by a property value. What data structure would you use?

**Expected Answer Points:**
- Use `reduce` to build object with property as key
- Initialize empty array per key if needed
- Handle duplicate keys

**Test Case:**
```javascript
const transactions = [
  { amount: 100, category: "food" },
  { amount: 50, category: "transport" },
  { amount: 200, category: "food" }
];

// Should return: { food: [100, 200], transport: [50] }
```

**Difficulty:** Medium | **Bonus:** Can you destructure the amounts only?

---

### Q4. Lookup Table Benefits
**Question:** What are 3 advantages of using a lookup table (object) over searching an array repeatedly?

**Expected Answer Points:**
- **O(1) access time** vs O(n) for array search
- **Prevents repeated iterations** over same data
- **Better for real-time queries** - cache friendly
- **More readable** - semantic access by key

**Real Example:**
```javascript
// Bad: O(n) per check
users.find(u => u.id === targetId);

// Good: O(1) per check
const userLookup = users.reduce((acc, u) => ({ ...acc, [u.id]: u }), {});
userLookup[targetId];
```

**Difficulty:** Easy | **Interview Bonus:** Mention space-time tradeoff

---

### Q5. Flatten with Reduce
**Question:** How can you use `reduce` to flatten a 2D array? What about deeply nested arrays?

**Expected Answer Points:**
- Use `concat` to combine arrays
- Start with empty array as accumulator
- Each iteration adds elements

**Example:**
```javascript
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// Expected: [1, 2, 3, 4, 5]

// Deep nesting needs recursion
const deep = [1, [2, [3, 4]], 5];
```

**Difficulty:** Medium | **Follow-up:** How would you handle sparse arrays?

---

### Q6. Some vs Filter Efficiency
**Question:** Describe a scenario where `some` is MORE efficient than `filter`. Why?

**Expected Answer Points:**
- **`some` stops at first match** (early exit)
- **`filter` always iterates** entire array
- Real-time savings on large datasets

**Inefficient vs Efficient:**
```javascript
// Inefficient - always iterates full array
const hasAdmin = users.filter(u => u.role === 'admin').length > 0;

// Efficient - stops at first admin
const hasAdmin = users.some(u => u.role === 'admin');
```

**Benchmark:** On 1M user array with admin at index 10, `some` is ~100k times faster

**Difficulty:** Easy | **Real Use:** Permission checks, validation gates

---

### Q7. Binning Timestamps
**Question:** Given an array of timestamps, how would you bin them into 30-minute intervals? Explain the time math.

**Expected Answer Points:**
- Round down timestamp to nearest 30-min boundary
- Use Date API to manipulate
- Group by rounded timestamp

**Math Formula:**
```javascript
const roundTo30Min = (timestamp) => {
  const date = new Date(timestamp);
  const minutes = date.getMinutes();
  const rounded = Math.floor(minutes / 30) * 30;  // 0 or 30
  date.setMinutes(rounded, 0, 0);  // Reset seconds and ms
  return date.toISOString();
};

// 10:15 → 10:00
// 10:45 → 10:30
// 11:20 → 11:00
```

**Difficulty:** Medium | **Challenge:** How would you do N-minute intervals?

---

### Q8. Edge Cases in Aggregation
**Question:** What edge cases should you consider when aggregating data from multiple sources?

**Expected Answer Points:**
- Missing values (undefined, null)
- Duplicate keys/IDs
- Empty arrays
- Type mismatches
- ID not existing in second dataset
- Duplicate entries in source

**Defensive Code:**
```javascript
// Handle undefined
const stock = inventory[productId]?.stock ?? 0;

// Handle duplicates
const seen = new Set();

// Provide defaults
const items = joinedData.map(item => ({
  ...item,
  count: item.count ?? 0
}));

// Validate types
if (!Array.isArray(data)) return {};
```

**Difficulty:** Medium | **Interview:** Mention defensive programming

---

### Q9. Handling Missing Values in Joins
**Question:** How would you handle missing or undefined values when joining two datasets? Show code.

**Expected Answer Points:**
- Optional chaining (`?.`)
- Nullish coalescing (`??`)
- Decide: include unmatched items or skip
- Validate before aggregating

**Example:**
```javascript
// Safe join with defaults
const joined = data1.map(item => ({
  ...item,
  relatedData: data2Lookup[item.id] ?? null
}));

// Skip if not found
const joined = data1
  .map(item => ({
    ...item,
    related: data2Lookup[item.id]
  }))
  .filter(item => item.related !== undefined);
```

**Difficulty:** Medium | **Real Scenario:** API data with missing fields

---

### Q10. Users with Posts Check
**Question:** Write a function to check if ALL users in an array have at least one post. What method would you choose?

**Expected Answer Points:**
- Create lookup of users who have posts
- Use `every` to check all users
- Alternative: `some` + negation
- Handle edge cases

**Test Case:**
```javascript
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
const posts = [{ userId: 1 }, { userId: 2 }];

// Expected: false (user 3 has no posts)

// With posts:
const posts = [
  { userId: 1 },
  { userId: 2 },
  { userId: 3 }
];
// Expected: true
```

**Expected Code:**
```javascript
const usersWithPosts = new Set(posts.map(p => p.userId));
const allHavePosts = users.every(u => usersWithPosts.has(u.id));
```

**Difficulty:** Medium | **Bonus:** Return list of users WITHOUT posts

---

## 3. PRACTICE CODING TASKS (10 Tasks)

### Task 1: Sum Order Amounts ⏱️ 5 min
**Difficulty:** Easy | **Topics:** `reduce`

**Description:** Given an array of orders, return total amount.

**Function Signature:**
```javascript
function sumOrders(orders: Array<{id, amount}>): number
```

**Example:**
```javascript
Input: [
  { id: 1, amount: 100 },
  { id: 2, amount: 250 },
  { id: 3, amount: 50 }
]

Output: 400
```

**Constraints:** 
- amount is always positive
- 1 ≤ orders.length ≤ 1000
- Handle empty array (return 0)

---

### Task 2: Find First Out-of-Stock ⏱️ 5 min
**Difficulty:** Easy | **Topics:** `some`, `find`

**Description:** Given cart and inventory, return first out-of-stock item or null.

**Function Signature:**
```javascript
function findOutOfStock(cart, inventory): Object|null
```

**Example:**
```javascript
Input:
cart = [
  { productId: 101, qty: 2 },
  { productId: 102, qty: 1 }
]
inventory = [
  { id: 101, stock: 10 },
  { id: 102, stock: 0 }
]

Output: { productId: 102, qty: 1 }
```

**Constraints:**
- Return FIRST out-of-stock item found
- Missing items treated as out of stock
- qty > stock means out of stock

---

### Task 3: Group Events by Type ⏱️ 5 min
**Difficulty:** Easy | **Topics:** `reduce`

**Description:** Group event objects by their `type` property.

**Function Signature:**
```javascript
function groupByType(events: Array): Object
```

**Example:**
```javascript
Input: [
  { type: 'click', data: { x: 10, y: 20 } },
  { type: 'scroll', data: { delta: 5 } },
  { type: 'click', data: { x: 50, y: 60 } }
]

Output: {
  click: [
    { type: 'click', data: { x: 10, y: 20 } },
    { type: 'click', data: { x: 50, y: 60 } }
  ],
  scroll: [
    { type: 'scroll', data: { delta: 5 } }
  ]
}
```

**Constraints:** Handle unknown types | Preserve order within groups

---

### Task 4: Merge User Data ⏱️ 10 min
**Difficulty:** Medium | **Topics:** `map`, `reduce`

**Description:** Merge two arrays: users and profiles by userId.

**Function Signature:**
```javascript
function mergeUserData(users, profiles): Array
```

**Example:**
```javascript
Input:
users = [
  { userId: 1, name: 'Alice' },
  { userId: 2, name: 'Bob' }
]
profiles = [
  { userId: 1, bio: 'Developer' },
  { userId: 2, bio: 'Designer' },
  { userId: 3, bio: 'Manager' }
]

Output: [
  { userId: 1, name: 'Alice', bio: 'Developer' },
  { userId: 2, name: 'Bob', bio: 'Designer' },
  { userId: 3, name: undefined, bio: 'Manager' }
]
```

**Constraints:** Include unmatched entries | Preserve all keys

---

### Task 5: Bin Timestamps by Hour ⏱️ 10 min
**Difficulty:** Easy | **Topics:** `reduce`, time manipulation

**Description:** Group ISO timestamps by hour.

**Function Signature:**
```javascript
function binByHour(timestamps: Array<string>): Object
```

**Example:**
```javascript
Input: [
  "2025-01-10T10:15:30Z",
  "2025-01-10T10:45:00Z",
  "2025-01-10T11:20:00Z",
  "2025-01-10T10:30:00Z"
]

Output: {
  "2025-01-10T10:00:00Z": 3,
  "2025-01-10T11:00:00Z": 1
}
```

**Constraints:** Timestamps are valid ISO strings | Count unique hours

---

### Task 6: Create Product Lookup Table ⏱️ 5 min
**Difficulty:** Easy | **Topics:** `reduce`, lookup table

**Description:** Convert product array into object keyed by productId.

**Function Signature:**
```javascript
function createLookup(products): Object
```

**Example:**
```javascript
Input: [
  { id: 101, name: 'Laptop', price: 1200 },
  { id: 102, name: 'Mouse', price: 25 },
  { id: 103, name: 'Keyboard', price: 75 }
]

Output: {
  101: { id: 101, name: 'Laptop', price: 1200 },
  102: { id: 102, name: 'Mouse', price: 25 },
  103: { id: 103, name: 'Keyboard', price: 75 }
}
```

**Constraints:** Use `id` as key | Handle duplicate ids (last one wins)

---

### Task 7: Check for Duplicate Emails ⏱️ 10 min
**Difficulty:** Medium | **Topics:** `some`, `reduce`

**Description:** Check if ANY email appears more than once.

**Function Signature:**
```javascript
function hasDuplicateEmails(users): boolean
```

**Example:**
```javascript
Input: [
  { id: 1, email: 'alice@example.com' },
  { id: 2, email: 'bob@example.com' },
  { id: 3, email: 'alice@example.com' }
]

Output: true

Input: [
  { id: 1, email: 'alice@example.com' },
  { id: 2, email: 'bob@example.com' }
]

Output: false
```

**Constraints:** Case-sensitive | Return true if duplicates found | Early exit when found

---

### Task 8: Aggregate Likes by User ⏱️ 5 min
**Difficulty:** Easy | **Topics:** `reduce`

**Description:** Map userId to total like count from like events.

**Function Signature:**
```javascript
function aggregateLikesByUser(likes): Object
```

**Example:**
```javascript
Input: [
  { userId: 101, postId: 1 },
  { userId: 101, postId: 2 },
  { userId: 102, postId: 1 },
  { userId: 101, postId: 3 },
  { userId: 102, postId: 2 }
]

Output: {
  101: 3,
  102: 2
}
```

**Constraints:** Duplicate likes count separately | All likes are valid unique events

---

### Task 9: Filter Inactive Users ⏱️ 15 min
**Difficulty:** Medium | **Topics:** `map`, `filter`, date manipulation

**Description:** Return users who haven't logged in during last 30 days.

**Function Signature:**
```javascript
function getInactiveUsers(users, loginEvents, days = 30): Array
```

**Example:**
```javascript
Input:
users = [
  { userId: 1, name: 'Alice' },
  { userId: 2, name: 'Bob' },
  { userId: 3, name: 'Charlie' }
]
loginEvents = [
  { userId: 1, timestamp: "2025-01-10T10:00:00Z" },
  { userId: 2, timestamp: "2024-12-01T10:00:00Z" }
]

Today: 2025-01-10

Output: [
  { userId: 2, name: 'Bob' },      // Last login 40 days ago
  { userId: 3, name: 'Charlie' }   // Never logged in
]
```

**Constraints:** 
- Users with NO login events are inactive
- Use UTC timezone
- Days parameter is configurable

---

### Task 10: Denormalize Comments ⏱️ 15 min
**Difficulty:** Medium | **Topics:** `map`, `reduce`, denormalization

**Description:** Attach comments to their respective posts.

**Function Signature:**
```javascript
function denormalizeComments(posts, comments): Array
```

**Example:**
```javascript
Input:
posts = [
  { id: 1, title: 'Post 1' },
  { id: 2, title: 'Post 2' }
]
comments = [
  { postId: 1, text: 'Great!', userId: 10 },
  { postId: 1, text: 'Thanks', userId: 11 },
  { postId: 2, text: 'Good', userId: 12 },
  { postId: 3, text: 'Orphan comment', userId: 13 }
]

Output: [
  {
    id: 1,
    title: 'Post 1',
    comments: [
      { postId: 1, text: 'Great!', userId: 10 },
      { postId: 1, text: 'Thanks', userId: 11 }
    ]
  },
  {
    id: 2,
    title: 'Post 2',
    comments: [
      { postId: 2, text: 'Good', userId: 12 }
    ]
  }
]
```
