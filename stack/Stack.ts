interface StackMethods {
  push(value: any): number;
  pop(): any;
  length(): number;
  peek(): any;
}

interface StorageType {
  [key: number]: any; //index signature
}

class Stack implements StackMethods {
  count: number;
  storage: StorageType;
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  push(value: any): number {
    this.storage[this.count] = value;
    this.count++;
    return this.count;
  }

  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  length(): number {
    return this.count;
  }

  peek() {
    return this.storage[this.count - 1];
  }
}

const myStack = new Stack();
myStack.push(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.pop();
console.log(myStack);
console.log(myStack.peek());
console.log(myStack.length());
