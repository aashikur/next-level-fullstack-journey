// * Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement.

// ? Input
const events = [
  { timestamp: "2025-10-22T10:01:00Z", type: "click" },
  { timestamp: "2025-10-22T10:05:00Z", type: "scroll" },
  { timestamp: "2025-10-22T10:14:00Z", type: "click" },
  { timestamp: "2025-10-22T10:31:00Z", type: "click" },
  { timestamp: "2025-10-22T10:45:00Z", type: "scroll" },
  { timestamp: "2025-10-22T11:02:00Z", type: "click" },
];

// ? Output
// binnedEvents = {
//   "2025-10-22T10:00:00.000Z": { "total": 3 },
//   "2025-10-22T10:30:00.000Z": { "total": 2 },
//   "2025-10-22T11:00:00.000Z": { "total": 1 }
// }

const time = "2025-10-22T10:31:00Z"

const SingleTime = (time) => {
  let milliseconds = new Date(time).getTime();
  let INTERVAL = 60 * 30 * 1000; // milliseconds
  return (Math.floor(milliseconds / INTERVAL) * INTERVAL)
}

const Obj = events.reduce((table, stamp) => {
  const z = new Date(SingleTime(stamp.timestamp)).toISOString();

  if (!table[z]) {
    table[z] = { total: 0 }
  }

  table[z].total += 1;
  return table;

}, {})


console.log(Obj)