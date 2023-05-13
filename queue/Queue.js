var Queue = /** @class */ (function () {
    function Queue() {
        this.collection = [];
    }
    Queue.prototype.print = function () {
        console.log(this.collection);
    };
    Queue.prototype.enqueue = function (value) {
        this.collection.unshift(value);
    };
    Queue.prototype.dequeue = function () {
        this.collection.pop();
    };
    Queue.prototype.front = function () {
        return this.collection[this.collection.length - 1];
    };
    Queue.prototype.size = function () {
        return this.collection.length;
    };
    Queue.prototype.isEmpty = function () {
        return this.collection.length === 0;
    };
    return Queue;
}());
var myQueue = new Queue();
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
