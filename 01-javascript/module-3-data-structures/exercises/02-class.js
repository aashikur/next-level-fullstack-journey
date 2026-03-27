// stateless vs stateful
// lexical Environment - is inside the function 
// closure - 

class Counter {
    constructor(count) {
        this.count = count
    }
    add(amount) {
        this.count += amount
    }
    print() {
        console.log(this.count);
    }
}

const counter1 = new Counter(0);
counter1.add(2);
counter1.add(3);
counter1.print();


const counter2 = new Counter(0);
counter2.add(3);
counter2.print();