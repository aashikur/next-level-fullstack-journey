// Linked List

// first node -> no previous node
// last node -> no last/next node
// node -> has previous & last node
// singly Linked List vs Doubly Linked List vs Circular Linked List
// Circular Linked List -> Head is connected to Tail
// [ Data | Next ]



class Node {
    constructor (value) {
        this.value = value
        this.next = null
    }
}


const head = new Node(10);

head.next = new Node(20);
head.next.next = new Node(30);

console.log(head)

let temp = head;
while(temp != null){
    console.log(temp.value, " ");
    temp = temp.next;
    
}