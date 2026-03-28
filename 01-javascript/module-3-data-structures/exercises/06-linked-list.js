// Linked List

// first node -> no previous node
// last node -> no last/next node
// node -> has previous & last node
// singly Linked List vs Doubly Linked List vs Circular Linked List
// Circular Linked List -> Head is connected to Tail
// [ Data | Next ]



class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;

        }
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) {
            console.log("Out of bound");
            return undefined
        }
        if (index === 0) {
            this.prepend(value)
            return;

        }
        if (index === this.length) {
            this.append(value)
            return;
        }

        const leadingNode = this._traverseToIndex(index - 1);
        const holdingNode = leadingNode.next;

        const newNode = new Node(value);

        leadingNode.next = newNode;
        newNode.next = holdingNode

        this.length++;
        return this;
    }

    // helper function
    _traverseToIndex(index) {
        // find the leading node
        let count = 0;
        let leadingNode = this.head;

        while (count !== index) {
            leadingNode = leadingNode.next;
            count++;
        }
        return leadingNode
    }

    remove(index) {

        if (index < 0 || index > this.length - 1) {
            console.log("out of bound: ")
            return;
        }

        if (index === 0) {
            if (this.length == 1) {
                this.head = null
                this.tail = null 
                this.length--;
                
                return this;
            }

            this.head = this.head.next
            this.length--;
            return this;

        }
        const leadingNode = this._traverseToIndex(index - 1)
        const nodeToRemove = leadingNode.next;

        // if(leadingNode.next === null){ 
        if (index === this.length - 1) {
            this.tail = leadingNode
            leadingNode.next = null;
            this.length--;
            return this;
        }



        leadingNode.next = nodeToRemove.next
        this.length--;
        return this;
    }

    print() {
        let currentNode = this.head;
        const arr = []

        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next
        }
        console.log(arr.join(" -> "), "-> null")
        return this;
    }
}

const linkedList = new LinkedList();

linkedList.append(10).append(20).append(30).prepend(0).print();
// Result: 0 → 10 → 20 → 30, length=4

linkedList.insert(2, 0).print()
// Insert 0 at index 2: 0 → 10 → 0 → 20 → 30, length=5
// Output: "0 → 10 → 0 → 20 → 30 -> null"

linkedList.remove(0).print();
// Remove index 0: 10 → 0 → 20 → 30, length=4

// linkedList.print()
// Output: "10 → 0 → 20 → 30 -> null"