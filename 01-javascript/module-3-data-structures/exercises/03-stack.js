// stack - LIFO -> Last IN first OUT
// lets with array
// push() pop() peek()


class Stack {
    constructor() {
        this.items = []
    }
    push(value) {
        this.items.push(value);
    }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop()
    }
    peek() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.items.length - 1]
    }
    print() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items.slice().reverse().join(" -> ")
    }

    isEmpty() {
        return (this.items.length === 0)
    }
}

const stack = new Stack();
console.log(stack.peek())
stack.push(1)
stack.push(4)
stack.push(9)
stack.push(16)

console.log(stack.print())
console.log(stack.peek())
console.log(stack.isEmpty())

