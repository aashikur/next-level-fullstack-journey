//* Generate a lookup table

//? Input
const postsArray = [
    { id: "p-101", title: "Intro to SQL", author: "Alex" },
    { id: "p-102", title: "Data Structures in JS", author: "Beth" },
    { id: "p-103", title: "Understanding Reduce", author: "Chris" },
    { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];



const lookupTable = postsArray.reduce((table, post) => {
    table[post.id] = post;
    return table;
}, {})

console.log(lookupTable)
// instant search O(1) 
console.log(lookupTable["p-104"])

for (let post in lookupTable){
    console.log(lookupTable[post])
}


//? Output
// {
//     "p-101": { "id": "p-101", "title": "Intro to SQL", "author": "Alex" },
//     "p-102": { "id": "p-102", "title": "Data Structures in JS", "author": "Beth" },
//     "p-103": { "id": "p-103", "title": "Understanding Reduce", "author": "Chris" },
//     "p-104": { "id": "p-104", "title": "CSS Grid Tricks", "author": "Alex" }
// }