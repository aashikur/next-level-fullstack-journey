# Module 2: Array & Data Methods - Quick Overview

## 📋 5 Topics Covered

### 1️⃣ Map Data Structure (Files: 01-03)
- Key-value storage with any data type as key
- Methods: `set()`, `get()`, `has()`, `delete()`
- Use: Fast lookups, ordered storage

### 2️⃣ Array.some() (Files: 04-1, 04-2)
- Check if ANY element matches condition
- **Early exit** ⚡ - stops at first match
- Use: Permission checks, validation, existence checks

### 3️⃣ Array.reduce() (Files: 05-07)
- Combine array into single value
- **3 Patterns:**
  - 05: Sum/total/count
  - 06: Lookup table (O(1) access)
  - 07: Grouping/aggregation

### 4️⃣ Denormalizing (File: 08)
- Join 2 arrays using `reduce` + `map`
- Pattern: create lookup → attach matching data
- Use: Users + posts, orders + items, database denormalization

### 5️⃣ Time Series Binning (File: 09)
- Group timestamped events into intervals
- Round time → use as key → count
- Use: Analytics, dashboards, real-time charts

---

## 🚀 Quick Code Reference

```javascript
// Sum values
array.reduce((sum, item) => sum + item.value, 0)

// Lookup table
array.reduce((table, item) => ({...table, [item.id]: item}), {})

// Group by property
array.reduce((groups, item) => {
  groups[item.type] ||= [];
  groups[item.type].push(item);
  return groups;
}, {})

// Check ANY
array.some(item => condition)

// Join arrays
const lookup = array2.reduce(...);
const result = array1.map(item => ({...item, related: lookup[item.id]}));
```

---

## 📊 Method Comparison

| Method | Returns | Speed | Use |
|--------|---------|-------|-----|
| some() | boolean | ⚡ O(1)* | Check ANY match |
| reduce() | value | O(n) | Aggregate/transform |
| Map | store | O(1) | Fast lookup |

*Exits early on first match
