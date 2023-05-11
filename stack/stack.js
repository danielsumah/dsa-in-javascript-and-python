var Stack = /** @class */ (function () {
    function Stack() {
        this.count = 0;
        this.storage = {};
    }
    Stack.prototype.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
        return this.count;
    };
    Stack.prototype.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };
    Stack.prototype.length = function () {
        return this.count;
    };
    Stack.prototype.peek = function () {
        return this.storage[this.count - 1];
    };
    return Stack;
}());
var myStack = new Stack();
myStack.push(0);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.pop();
console.log(myStack);
console.log(myStack.peek());
console.log(myStack.length());
