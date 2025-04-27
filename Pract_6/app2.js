class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.subtreeSum = 0; 
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

    // всі суми піддерев
    calculateSubtreeSums(node = this.root) {
        if (!node) return 0;

        const leftSum = this.calculateSubtreeSums(node.left);
        const rightSum = this.calculateSubtreeSums(node.right);

        node.subtreeSum = node.value + leftSum + rightSum;

        return node.subtreeSum;
    }

    inOrderCheck(node = this.root) {
        if (!node) return;

        this.inOrderCheck(node.left);

        const leftSum = node.left ? node.left.subtreeSum : 0;
        const rightSum = node.right ? node.right.subtreeSum : 0;
        const diff = Math.abs(leftSum - rightSum);

        if (diff > 20) {
            console.log(`Вузол ${node.value}: ліва сума = ${leftSum}, права сума = ${rightSum}, різниця = ${diff}`);
        }

        this.inOrderCheck(node.right);
    }
}

// Тест
const tree = new BinarySearchTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);
tree.insert(60);
tree.insert(90);

console.log("Результат:");
tree.calculateSubtreeSums(); 
tree.inOrderCheck();
