
// ### 8. Dashboard Widget Data Join
// **Description:**
// Join metrics from two different APIs by widgetId. Include unmatched entries.

// **Function Signature:**
// ```javascript
// function joinWidgetMetrics(metricsA, metricsB): Array
// ```

// **Example Input:**
// ```javascript
// const metricsA = [
//   { widgetId: 1, views: 1200 },
//   { widgetId: 2, views: 850 }
// ];

// const metricsB = [
//   { widgetId: 1, clicks: 45 },
//   { widgetId: 2, clicks: 32 },
//   { widgetId: 3, clicks: 60 }
// ];
// ```

// **Expected Output:**
// ```javascript
// [
//   { widgetId: 1, views: 1200, clicks: 45 },
//   { widgetId: 2, views: 850, clicks: 32 },
//   { widgetId: 3, views: undefined, clicks: 60 }
// ]
// ```

// **Difficulty:** Medium | **Topics:** `map`, denormalization, joining arrays


/**
 * function(matrixA, matrixB)
 * making 1 lookup table
 * 
 */