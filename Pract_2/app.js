class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}

class LinkedList {
    constructor() {
      this.head = null;
    }

    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    removeFirstLessThanFive() {
      if (!this.head) return; //якщо порожній
  
      if (Math.abs(this.head.value) < 5) {
        this.head = this.head.next;
        return;
      }
  
      let current = this.head;
      while (current.next) {
        if (Math.abs(current.next.value) < 5) {
          current.next = current.next.next; 
          return;
        }
        current = current.next;
      }

      console.log("Елемент не знайдено!");
    }
  
    print() {
      let current = this.head;
      let result = "";
      while (current) {
        result += current.value + " -> ";
        current = current.next;
      }
      console.log(result + "null");
    }
}
  

const list = new LinkedList();
list.append(1);
list.append(3);
list.append(7);
list.append(-2);
list.append(15);

console.log("Початковий список:");
list.print();

list.removeFirstLessThanFive();

console.log("Після видалення першого числа яке < 5:");
list.print();