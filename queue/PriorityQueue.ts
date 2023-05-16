interface PriorityQueueValueI<T> {
  0: T;
  1: number;
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
    // this.collection.forEach((valueInCollection) => {});
    for (
      let indexPositionInCollection = 0;
      indexPositionInCollection < this.collection.length;
      indexPositionInCollection++
    ) {
      const element = this.collection[indexPositionInCollection];

      if (valueToEnter[1] > element[1]) {
        this.collection.splice(indexPositionInCollection + 1, 0, valueToEnter);
      } else {
        this.collection.splice(indexPositionInCollection, 0, valueToEnter);
      }
      console.log(this.collection);
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

console.log("Updated state of queue");
myPriorityQueue.enqueue(["Man 1", 1]);
myPriorityQueue.enqueue(["Man 3", 3]);
myPriorityQueue.enqueue(["Man 2", 2]);
myPriorityQueue.enqueue(["Man 2B", 2]);
myPriorityQueue.print();

console.log("\n");

console.log("Who is at the front ? =>", myPriorityQueue.front());

// console.log("\nUpdated state of queue");
// console.log("\n Value in front is => ", myQueue.front());
// myQueue.print();

// myQueue.dequeue();
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
