//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
    "A",
    "C",
    "B",
    "A",
    "B",
    "B",
    "C",
    "A",
    "B",
    "D",
    "A",
    "C",
    "B",
    "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

// 

const optResponse = surveyResponses.reduce((table, item) => {

    // console.log(table, item)
    if (table[item]) {
        table[item] = table[item] + 1;
    } else {
        table[item] = 1;
    }
    return table;

}, {})

// console.log(optResponse);




// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
    { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
    { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
    { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
    { category: "Home", item: "Chair", price: 150, quantity: 1 },
    { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
    { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//? Output
// {
//     Electronics: {
//         totalRevenue: 1330,
//         itemCount: 4,
//     },
//     Books: {
//         totalRevenue: 110,
//         itemCount: 3,
//     },
//     Home: {
//         totalRevenue: 150,
//         itemCount: 1,
//     },
// };


// reduce index by category
// sum the category => totalRevenue += price * quantity , itemCount += quantity


const totalSales = sales.reduce((table, sale) => {

    if (!table[sale.category]) {
        table[sale.category] = {
            totalRevenue: 0,
            itemCount: 0
        }
    }

    table[sale.category].totalRevenue += sale.price * sale.quantity;
    table[sale.category].itemCount += sale.quantity;

    return table;

}, {})

console.log(totalSales)