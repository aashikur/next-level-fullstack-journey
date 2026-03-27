// stateless vs stateful
// lexical Environment - is inside the function 



// function generally stateless 
const counter = (amount) => {
    let count = 0;
    return count + amount
}
console.log(counter(3))
console.log(counter(5))



// obj generally stateful
const TheCounter = {
    count: 0,
    add(amount) {
        this.count = this.count + amount;
    },
    print() {
        console.log(this.count)
    }
};

TheCounter.add(5);
TheCounter.print()

TheCounter.add(3);
TheCounter.print()