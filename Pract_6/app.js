class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
      this.root = null;
  }

  insert(value) {
      const newNode = new Node(value);
      if (!this.root) {
          this.root = newNode;
          return;
      }
      let current = this.root;
      while (true) {
          if (value < current.value) {
              if (!current.left) {
                  current.left = newNode;
                  return;
              }
              current = current.left;
          } else {
              if (!current.right) {
                  current.right = newNode;
                  return;
              }
              current = current.right;
          }
      }
  }

  // перевірка однакових цифр
  hasSameDigits(number) {
      const str = number.toString();
      if (str.length === 1) return false;
      let arr = str.split('');
      return arr.every(ch => ch === str[0]);
  }

  // заміна значень
  inOrderReplace(node = this.root) {
      if (!node) return;

      this.inOrderReplace(node.left);

      if (this.hasSameDigits(node.value)) {
          node.value = 0;
      }

      this.inOrderReplace(node.right);
  }

  inOrderPrint(node = this.root) {
      if (!node) return;
      this.inOrderPrint(node.left);
      console.log(node.value);
      this.inOrderPrint(node.right);
  }
}

// Тест
const tree = new BinarySearchTree();
tree.insert(111);
tree.insert(5);
tree.insert(2222);
tree.insert(78);
tree.insert(33);
tree.insert(444);
tree.insert(9);

console.log('До заміни:');
tree.inOrderPrint(); 

tree.inOrderReplace(); 

console.log('Після заміни:');
tree.inOrderPrint(); 
