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
            this.head = newNode;
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

        while(count !== index){
            leadingNode = leadingNode.next;
            count++;
        }
        return leadingNode
    }

    remove() { }

    print() {
        let currentNode = this.head;
        const arr = []

        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next
        }
        console.log(arr.join(" -> "), "-> null")
    }
}

const linkedList = new LinkedList();

linkedList.append(10).append(20).append(30).prepend(0)

linkedList.insert(2, 0).print();