// ### 4. API Response Normalization
// **Description:**
// Flatten nested API response into flat lookup table for O(1) access by ID.

// **Function Signature:**
// ```javascript
// function normalizeCategoryData(data): Object
// ```

// **Example Input:**
// ```javascript
// const apiData = [
//   {
//     id: "cat-1",
//     name: "Electronics",
//     subcategories: [
//       { id: "sub-1", name: "Phones" },
//       { id: "sub-2", name: "Laptops" }
//     ]
//   },
//   {
//     id: "cat-2",
//     name: "Clothing",
//     subcategories: [
//       { id: "sub-3", name: "Shirts" }
//     ]
//   }
// ];
// ```

// **Expected Output:**
// ```javascript
// {
//   "cat-1": { id: "cat-1", name: "Electronics", type: "category" },
//   "cat-2": { id: "cat-2", name: "Clothing", type: "category" },
//   "sub-1": { id: "sub-1", name: "Phones", type: "subcategory" },
//   "sub-2": { id: "sub-2", name: "Laptops", type: "subcategory" },
//   "sub-3": { id: "sub-3", name: "Shirts", type: "subcategory" }
// }
// ```

// **Difficulty:** Medium | **Topics:** `reduce`, flatten, lookup table


// reduce({table, item}, {})

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


const result = apiData.reduce((table, item) => {
    const {id, name, subcategories} = item;
    
    if(table[id] !== null) {
        table[id] = {}; // id, name, type
    }
    table[id] = {id: id, name: name, type: 'category'}

    subcategories.forEach(element => {
        const {id, name} = element;
        if(table[id] !== null) {
            table[id] = {};
        }
        table[id] = {id: id, name: name, type: 'subcategory'}
    });

    return table;

},{})

// console.log(apiData[0].subcategories)
console.log(result)
/* result => 
{
  'cat-1': { id: 'cat-1', name: 'Electronics', type: 'category' },
  'sub-1': { id: 'sub-1', name: 'Phones', type: 'subcategory' },
  'sub-2': { id: 'sub-2', name: 'Laptops', type: 'subcategory' },
  'cat-2': { id: 'cat-2', name: 'Clothing', type: 'category' },
  'sub-3': { id: 'sub-3', name: 'Shirts', type: 'subcategory' }
}
*/