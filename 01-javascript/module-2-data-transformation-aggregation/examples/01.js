// ### 1. Product Inventory Aggregator
// **Description:**
// Given an array of product sales (with productId, quantity, and date), aggregate total quantity sold per product for a dashboard display.

// **Function Signature:**
// ```javascript
// function aggregateSales(sales: Array<{productId: number, quantity: number, date: string}>): Object
// ```

// **Example Input:**
// ```javascript
const sales = [
  { productId: 101, quantity: 5, date: "2025-01-10" },
  { productId: 102, quantity: 3, date: "2025-01-10" },
  { productId: 101, quantity: 2, date: "2025-01-11" },
  { productId: 103, quantity: 8, date: "2025-01-11" },
  { productId: 102, quantity: 4, date: "2025-01-12" }
];
// ```

// **Expected Output:**
// ```javascript
// {
//   101: 7,
//   102: 7,
//   103: 8
// }
// ```

// **Constraints:**
// - 1 ≤ sales.length ≤ 10,000
// - 1 ≤ quantity ≤ 1000
// - productId is unique per product

// **Difficulty:** Medium | **Topics:** `reduce`, aggregation, lookup table

const SalesSummary = sales.reduce((table, item) => {
    const {productId:id, quantity:q} = item;
    if(!table[id]) table[id] = 0;
    table[id] += q;
    return table;
}, {})

console.log(SalesSummary);