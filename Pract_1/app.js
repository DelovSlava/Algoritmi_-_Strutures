class IntegerNumbersStack{
    constructor(){
        this.items = [];
    }

    addNumToStack(int){
        this.items.push(int);
    }

    displayStack(){
        if (this.isEmpty()) {
            console.log("Стек порожній.");
        } else {
            console.log("Елементи стеку: ", this.items);
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    deleteFromStack(){
        if(this.isEmpty()){
            console.log("Помилка: стек порожній, неможливо видалити елемент.");
            return null;
        }
        return this.items.pop();
    }

    clearStack() {
        this.items = [];
        console.log("Стек очищено.");
    }

    averageEven(){

        if(this.isEmpty()){
            console.log("Стек порожній.");
            return null;
        }

        let evenNumbers = this.items.filter(num => num % 2 === 0);
        if(evenNumbers.length === 0){
            console.log("У стеку немає парних чисел.");
            return null;
        }

        let sum = evenNumbers.reduce((accumulator, num) => accumulator + num, 0);
        let average = sum / evenNumbers.length;

        console.log("Середнє арифметичне парних чисел:", average);
        return average; 
    }
}

function main() {
    const stack = new IntegerNumbersStack();

    stack.addNumToStack(1);
    stack.addNumToStack(2);
    stack.addNumToStack(3);
    stack.addNumToStack(4);
    stack.addNumToStack(2);
    stack.addNumToStack(1);
    stack.addNumToStack(8);
 
    stack.displayStack();

    stack.averageEven();
    stack.displayStack();

    stack.deleteFromStack();
    stack.displayStack();

    stack.clearStack();
    stack.displayStack();
}

main();
