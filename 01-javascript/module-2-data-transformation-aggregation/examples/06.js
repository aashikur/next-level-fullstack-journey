
// ### 6. Social Media Like Aggregator
// **Description:**
// Aggregate total likes per post. Each event represents one user liking a post.

// **Function Signature:**
// ```javascript
// function aggregateLikes(likes): Object
// ```

// **Example Input:**
// ```javascript
const likes = [
  { postId: 1, userId: 101 },
  { postId: 1, userId: 102 },
  { postId: 2, userId: 101 },
  { postId: 1, userId: 103 },
  { postId: 3, userId: 102 }
];
// ```

// **Expected Output:**
// ```javascript
// { 1: 3, 2: 1, 3: 1 }
// ```

// **Constraints:** Duplicate likes counted separately | All likes are valid

// **Difficulty:** Easy | **Topics:** `reduce`, aggregation


const aggregateLikes = (likes) => {
    const x = likes.reduce((acc, item) => {
        const {postId} = item;
        if(!acc[postId]) {
            acc[postId] = 0;
        } 
        acc[postId] += 1;
        return acc;
    }, {})
    return x;
}

console.log(aggregateLikes(likes))


// const aggregateLikes2 = (likes) => likes.reduce((acc, { postId }) => ((acc[postId] = (acc[postId] ?? 0) + 1), acc), {});
// const aggregateLikes3 = (likes) => likes.reduce((acc, { postId }) => ((acc[postId] = (acc[postId] ?? 0) + 1), acc), {})
