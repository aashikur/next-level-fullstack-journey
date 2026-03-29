// ### 5. Time Series Event Binning
// **Description:**
// Group timestamped events into 1-hour bins and count events per bin.

// **Function Signature:**
// ```javascript
// function binEventsByHour(events): Object
// ```

// **Example Input:**
// ```javascript
const events = [
    { timestamp: "2025-01-10T10:15:00Z", type: "click" },
    { timestamp: "2025-01-10T10:45:00Z", type: "click" },
    { timestamp: "2025-01-10T11:20:00Z", type: "scroll" },
    { timestamp: "2025-01-10T11:55:00Z", type: "click" },
    { timestamp: "2025-01-10T12:30:00Z", type: "scroll" }
];
// ```

// **Expected Output:**
// ```javascript
// {
//   "2025-01-10T10:00:00Z": 2,
//   "2025-01-10T11:00:00Z": 2,
//   "2025-01-10T12:00:00Z": 1
// }
// ```

// **Difficulty:** Medium | **Topics:** `reduce`, time manipulation, binning


// helper function
const TimeInterval = (time) => {

    const INTERVAL = 1 * 60 * 60 * 1000
    const now = new Date(time).getTime();
    const IntervalTime = Math.floor(now / INTERVAL) * INTERVAL;
    const result = new Date(IntervalTime);

    return result;
}

const result = events.reduce((acc, item) => {
    const t = TimeInterval(item.timestamp)
        .toISOString();

    if (!acc[t]) {
        acc[t] = 1;
    } else {
        acc[t] += 1;
    }

    return acc;
}, {})

console.log(result);
/*
{
  '2025-01-10T10:00:00.000Z': 2,
  '2025-01-10T11:00:00.000Z': 2,
  '2025-01-10T12:00:00.000Z': 1
} 
*/