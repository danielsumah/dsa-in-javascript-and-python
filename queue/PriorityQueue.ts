interface PriorityQueueValueI<T> {
  value: T;
  priority: number;
}
interface PriorityQueueInterface {
  print(): void;
  enqueue(value: PriorityQueueValueI<any>): void;
  dequeue(): void;
  front(): PriorityQueueValueI<any>;
  size(): number;
  isEmpty(): boolean;
}

class PriorityQueue implements PriorityQueueInterface {
  collection: Array<PriorityQueueValueI<any>>;
  constructor() {
    this.collection = [];
  }
  print(): void {
    console.log(this.collection);
  }
  enqueue(valueToEnter: PriorityQueueValueI<any>): void {
    if (this.isEmpty()) {
      this.collection.push(valueToEnter);
      return;
    }
    // let isValueAdded
    for (
      let indexPositionInCollection = 0;
      indexPositionInCollection < this.size();
      indexPositionInCollection++
    ) {
      const elementInCollection = this.collection[indexPositionInCollection];
      if (valueToEnter.priority > elementInCollection.priority) {
        this.collection.splice(indexPositionInCollection, 0, valueToEnter);
        break;
      }
    }
  }
  dequeue(): void {
    this.collection.pop();
  }
  front(): PriorityQueueValueI<string> {
    return this.collection[this.collection.length - 1];
  }
  size(): number {
    return this.collection.length;
  }
  isEmpty(): boolean {
    return this.collection.length === 0;
  }
}

const myPriorityQueue = new PriorityQueue();
console.log("\nInitial state of priority queue");
myPriorityQueue.print();

console.log("\n");

myPriorityQueue.enqueue({ value: "Man 1", priority: 1 });
myPriorityQueue.enqueue({ value: "Man 6", priority: 6 });
myPriorityQueue.enqueue({ value: "Man 2", priority: 2 });
myPriorityQueue.enqueue({ value: "Man 2B", priority: 2 });
myPriorityQueue.enqueue({ value: "Man 4", priority: 4 });
console.log("Updated state of queue");
myPriorityQueue.print();

console.log("\n");

console.log("Who is at the front ? =>", myPriorityQueue.front());

console.log("carry out a dequeue");
myPriorityQueue.dequeue();
console.log("Updated state of queue");
myPriorityQueue.print();

console.log("\nThe size of the ueue is now =>", myPriorityQueue.size());
console.log("\nis queue empty =>", myPriorityQueue.isEmpty());

console.log("dequeue 4 times");
myPriorityQueue.dequeue();
myPriorityQueue.dequeue();
myPriorityQueue.dequeue();
myPriorityQueue.dequeue();
console.log("\nThe size of the ueue is now =>", myPriorityQueue.size());
console.log("\nis queue empty =>", myPriorityQueue.isEmpty());
// console.log("\nUpdated state of queue");
// console.log("\n Value in front is => ", myQueue.front());
// myQueue.print();

// console.log("\nAfter first dequeue");
// myQueue.print();

// console.log("\nQueue size is => ", myQueue.size());

// console.log("\n Value in front is => ", myQueue.front());

// console.log("\n Is queue empty", myQueue.isEmpty());
// myQueue.print();

// myQueue.dequeue();
// myQueue.dequeue();

// console.log("\n Is queue empty", myQueue.isEmpty());
// myQueue.print();
