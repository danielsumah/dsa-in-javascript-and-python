var MySet = /** @class */ (function () {
    function MySet() {
        this.collection = [];
    }
    MySet.prototype.values = function () {
        return this.collection;
    };
    MySet.prototype.size = function () {
        return this.collection.length;
    };
    MySet.prototype.has = function (value) {
        return this.collection.indexOf(value) !== -1;
    };
    MySet.prototype.add = function (value) {
        if (this.collection.indexOf(value) === -1) {
            this.collection.push(value);
        }
    };
    MySet.prototype.remove = function (value) {
        var valuePosition = this.collection.indexOf(value);
        if (value !== -1) {
            this.collection.splice(valuePosition, 1);
        }
    };
    MySet.prototype.merge = function (Set2) {
        var mergedSet = new MySet();
        var set1 = this.values();
        for (var i = 0; i < set1.length; i++) {
            var element = set1[i];
            mergedSet.add(element);
        }
        for (var i = 0; i < Set2.length; i++) {
            var element = Set2[i];
            mergedSet.add(element);
        }
        return mergedSet.values();
    };
    MySet.prototype.intersection = function (Set2) {
        var intersectionSet = new MySet();
        for (var i = 0; i < Set2.length; i++) {
            var element = Set2[i];
            if (this.has(element)) {
                intersectionSet.add(element);
            }
        }
        return intersectionSet.values();
    };
    return MySet;
}());
var aNewSet = new MySet();
console.log(aNewSet.values());
aNewSet.add(2);
aNewSet.add("Daniel");
aNewSet.add("Daniel");
aNewSet.add(3);
console.log(aNewSet.values());
console.log("size is ", aNewSet.size());
aNewSet.add("ToRemove");
console.log("value to remove is last", aNewSet.values());
aNewSet.remove("ToRemove");
console.log(aNewSet.values());
console.log("does 3 exist? => ", aNewSet.has(3));
console.log("does 3 ToRemove? => ", aNewSet.has("ToRemove"));
console.log("\nset 1 => ", aNewSet.values());
var setToMerge = [3, "Daniel", 5, 6, "like"];
console.log("set 2 => ", setToMerge);
var mergedSet = aNewSet.merge(setToMerge);
console.log("merged set => ", mergedSet);
console.log("\nIntercetion of the sets => ", aNewSet.intersection(setToMerge));
