
// ### 3. E-commerce Cart Validation
// **Description:**
// Check if ANY item in cart is out of stock. Return true if validation fails (out of stock found).

// **Function Signature:**
// ```javascript
// function hasOutOfStockItem(cart, inventory): boolean
// ```

// **Example Input:**
// ```javascript
// const cart = [
//   { productId: 101, quantity: 2 },
//   { productId: 102, quantity: 1 },
//   { productId: 103, quantity: 5 }
// ];

// const inventory = [
//   { productId: 101, stock: 10 },
//   { productId: 102, stock: 0 },
//   { productId: 103, stock: 3 }
// ];
// ```

// **Expected Output:**
// ```javascript
// true  // Product 102 out of stock, Product 103 insufficient stock
// ```

// **Constraints:**
// - cart.length ≤ 100
// - Missing products treated as out of stock
// - quantity > stock means out of stock

// **Difficulty:** Easy | **Topics:** `some`, `map`, validation



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

const hasOutOfStockItem = (cart, inventory) => {

}

console.log(hasOutOfStockItem(cart, inventory))

const hashInventory = inventory.reduce((table, item) => {
    table[item.productId] = item.stock;
    return table;
},{})

const theResult = cart.some(c => hashInventory[c.productId] < c.quantity)

for(let c of cart){
    console.log("inventory : " + hashInventory[c.productId] , "cart : " + c.quantity, !(hashInventory[c.productId] < c.quantity))
}

console.log(hashInventory)
console.log(theResult)