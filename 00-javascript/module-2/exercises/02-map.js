// this lesson give what we can do with maps and some methods and manage a data to transform other form to show it to card table in website

const products = [
  { id: 101, name: "ZenBook Pro", category: "Electronics", price: 1299.99, rating: 4.8, stock: 15 },
  { id: 102, name: "Wireless Ergonomic Mouse", category: "Accessories", price: 45.50, rating: 4.5, stock: 120 },
  { id: 103, name: "Mechanical Gaming Keyboard", category: "Accessories", price: 89.00, rating: 4.7, stock: 45 },
  { id: 104, name: "UltraWide 34-inch Monitor", category: "Electronics", price: 499.99, rating: 4.6, stock: 10 },
  { id: 105, name: "Noise Cancelling Headphones", category: "Electronics", price: 299.00, rating: 4.9, stock: 30 },
  { id: 106, name: "Leather Office Chair", category: "Furniture", price: 220.00, rating: 4.3, stock: 8 },
  { id: 107, name: "Standing Desk (Electric)", category: "Furniture", price: 350.00, rating: 4.4, stock: 12 },
  { id: 108, name: "4K Web Camera", category: "Accessories", price: 75.00, rating: 4.2, stock: 60 },
  { id: 109, name: "Portable SSD 1TB", category: "Storage", price: 110.00, rating: 4.8, stock: 85 },
  { id: 110, name: "USB-C Hub Multiport", category: "Accessories", price: 35.99, rating: 4.1, stock: 200 },
  { id: 111, name: "Smart LED Desk Lamp", category: "Furniture", price: 49.99, rating: 4.5, stock: 55 },
  { id: 112, name: "Gaming Console Gen 5", category: "Electronics", price: 499.00, rating: 4.9, stock: 5 },
  { id: 113, name: "Drip Coffee Maker", category: "Appliances", price: 59.00, rating: 4.0, stock: 40 },
  { id: 114, name: "Air Purifier", category: "Appliances", price: 180.00, rating: 4.7, stock: 18 },
  { id: 115, name: "Bluetooth Soundbar", category: "Electronics", price: 130.00, rating: 4.3, stock: 25 },
  { id: 116, name: "Waterproof Backpack", category: "Accessories", price: 65.00, rating: 4.6, stock: 110 },
  { id: 117, name: "Stainless Steel Bottle", category: "Home & Kitchen", price: 25.00, rating: 4.8, stock: 300 },
  { id: 118, name: "Memory Foam Pillow", category: "Home & Kitchen", price: 40.00, rating: 4.2, stock: 90 },
  { id: 119, name: "Electric Toothbrush", category: "Personal Care", price: 85.00, rating: 4.7, stock: 75 },
  { id: 120, name: "Yoga Mat (Non-Slip)", category: "Fitness", price: 30.00, rating: 4.5, stock: 150 }
];

// output => [{name : "Furniture products"}, {name : "electronic product"}]

// * process 
// filter ==> Electronic
// sort by Rating
// slice ==> top 3
// map => name : name

const ExpectedData = products
        .filter(item => item.category === "Electronics" )
        .sort((a, b) => a.rating - b.rating)
        .map(item => ({name : item.name, rating: item.rating}))


console.log( ExpectedData, "total : "+ ExpectedData.length)

