// TypeScript Function Examples

function greet(name: string): string {
  return `Hello, ${name}!`;
}

const add = (a: number, b: number): number => a + b;

// Optional parameter
function introduce(name: string, age?: number): string {
  if (age !== undefined) {
    return `My name is ${name} and I am ${age} years old.`;
  }
  return `My name is ${name}.`;
}

// Default parameter
function multiply(a: number, b: number = 2): number {
  return a * b;
}
