class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
      this.prev = null;
    }
}
  
class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }

    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = this.tail = newNode;
        return;
      }
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  
    removeLastLessThan15() {
      let current = this.tail;
  
      while (current) {
        if (current.value < 15) {
          if (current === this.head && current === this.tail) { //для одного ел.
            this.head = this.tail = null;
          } else if (current === this.tail) { //для остаанього
            this.tail = current.prev;
            this.tail.next = null;
          } else if (current === this.head) { //для першого
            this.head = current.next;
            this.head.prev = null;
          } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
          }
          return;
        }
        current = current.prev; 
      }
    }
  
    print() {
      let current = this.head;
      let result = "";
      while (current) {
        result += current.value + " <-> ";
        current = current.next;
      }
      console.log(result + "null");
    }
}  
  

const list = new DoublyLinkedList();
list.append(4);
list.append(19);
list.append(17);
list.append(15);
list.append(2);

console.log("Початковий список:");
list.print();

list.removeLastLessThan15();
console.log("Після видалення останнього елемента < 15:");
list.print();