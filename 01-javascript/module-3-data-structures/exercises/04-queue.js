// Array Implementation 
// Queue - FIFO 
// enqueue - dequeue 

class Queue {
    constructor() {
        this.items = []
    }
    enqueue(value) {
        console.log('Added : ', value)
        this.items.push(value)
    }
    dequeue() {
        return this.items.shift()
    }
    peek() {
        return this.items[0]
    }
    print() {
        return this.items.join(' -> ')
    }
    isEmpty() {
        return this.items.length === 0
    }
}



const queue = new Queue();

console.log(queue.print())
queue.enqueue(4)
queue.enqueue(6)
queue.enqueue(8)
queue.enqueue(10)
// queue.enqueue(7)
// queue.enqueue(8)

// console.log(queue.print())
// queue.dequeue();
// console.log(queue.print())
// console.log(queue.isEmpty())
console.log('peek', queue.peek())
console.log(queue.print())
queue.dequeue();
console.log(queue.print())


