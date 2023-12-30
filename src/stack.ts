class Stack {
  public items: any[];
  constructor() {
    this.items = [];
  }
  push(element: any) {
    // push element into the items
    this.items.push(element);
  }
  pop() {
    if (this.items.length > 0) {
      return this.items.pop();
    }
    return "Underflow";
  }
  peek() {
    if (this.items.length > 0) {
      return this.items[this.items.length - 1];
    }
    return "UnderFlow";
  }
  isEmpty() {
    if (this.items.length == 0) {
      return true;
    }
    return false;
  }
  printStack() {
    let str = "";
    for (let i = 0; i < this.items.length; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}
// creating object for stack class
var stack = new Stack();

// testing isEmpty and pop on an empty stack

// returns false
console.log(stack.isEmpty());

// returns Underflow
console.log(stack.pop());
// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element
// prints [10, 20, 30]
console.log(stack.printStack(), "stack");

// returns 30
console.log(stack.peek(), "peek");

// returns 30 and remove it from stack
console.log(stack.pop());

// returns [10, 20]
console.log(stack.printStack());
