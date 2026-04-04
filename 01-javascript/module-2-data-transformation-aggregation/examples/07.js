
// ### 7. User Permissions Checker
// **Description:**
// Check if user has access to feature using lookup table for O(1) access.

// **Function Signature:**
// ```javascript
// function hasPermission(user, permissions, feature): boolean
// ```

// **Example Input:**
// ```javascript
const user = { id: 1, roleId: 5 };

const permissions = [
  { roleId: 5, feature: "dashboard" },
  { roleId: 5, feature: "analytics" },
  { roleId: 3, feature: "profile" }
];

const featureToCheck = "analytics";
// ```

// **Expected Output:**
// ```javascript
// true
// ```

// **Constraints:** One permission per (roleId, feature) pair | Missing role returns false

// **Difficulty:** Easy | **Topics:** `map`, `reduce`, lookup table


// TODO => permissions[roleId] === permissons[featureToCheck]

const hasPermission = (user, permissions, feature) => {
    const table = permissions.reduce((acc, {roleId, feature}) => {
        acc[`${roleId}:${feature}`] = true;
        // console.log(acc);
        return acc;
    }, {})

    return table[`${user.roleId}:${feature}`] === true

}

console.log(hasPermission(user, permissions, featureToCheck))