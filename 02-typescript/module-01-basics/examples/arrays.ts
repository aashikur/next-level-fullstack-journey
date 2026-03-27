// TypeScript Array Examples

const numbers: number[] = [1, 2, 3, 4, 5];
const names: Array<string> = ["Alice", "Bob", "Charlie"];

// Tuple
let person: [string, number] = ["Alice", 30];

// Readonly array
const readonlyNums: ReadonlyArray<number> = [10, 20, 30];

// Array methods
const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
