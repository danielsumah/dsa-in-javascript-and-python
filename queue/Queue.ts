interface QueueInterface {
  print(): void;
  enqueue(value: any): void;
  dequeue(): void;
  front(): void;
  size(): number;
  isEmpty(): boolean;
}

class Queue implements QueueInterface {
  collection: Array<any>;
  constructor() {
    this.collection = [];
  }
  print(): void {
    console.log(this.collection);
  }
  enqueue(value: any): void {
    this.collection.unshift(value);
  }
  dequeue(): void {
    this.collection.pop();
  }
  front(): void {
    return this.collection[this.collection.length - 1];
  }
  size(): number {
    return this.collection.length;
  }
  isEmpty(): boolean {
    return this.collection.length === 0;
  }
}

const myQueue = new Queue();
console.log("\nInitial state of queue");
myQueue.print();

myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log("\nUpdated state of queue");
console.log("\n Value in front is => ", myQueue.front());
myQueue.print();

myQueue.dequeue();
console.log("\nAfter first dequeue");
myQueue.print();

console.log("\nQueue size is => ", myQueue.size());

console.log("\n Value in front is => ", myQueue.front());

console.log("\n Is queue empty", myQueue.isEmpty());
myQueue.print();

myQueue.dequeue();
myQueue.dequeue();

console.log("\n Is queue empty", myQueue.isEmpty());
myQueue.print();
