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
        for (var i = 0; i < Set2.size(); i++) {
            var element = Set2.values()[i];
            mergedSet.add(element);
        }
        return mergedSet;
    };
    MySet.prototype.intersection = function (Set2) {
        var intersectionSet = new MySet();
        for (var i = 0; i < Set2.size(); i++) {
            var element = Set2.values()[i];
            if (this.has(element)) {
                intersectionSet.add(element);
            }
        }
        return intersectionSet;
    };
    MySet.prototype.subset = function (Set2) {
        var _this = this;
        return Set2.values().every(function (value) { return _this.collection.includes(value); });
    };
    MySet.prototype.difference = function (Set2) {
        var diffSet = new MySet();
        var Set1 = this.values();
        for (var i = 0; i < this.size(); i++) {
            var element = this.values()[i];
            if (!Set2.has(element)) {
                diffSet.add(element);
            }
        }
        for (var i = 0; i < Set2.size(); i++) {
            var element = Set2.values()[i];
            if (!this.has(element)) {
                diffSet.add(element);
            }
        }
        return diffSet;
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
console.log("\nvalue to remove is last", aNewSet.values());
aNewSet.remove("ToRemove");
console.log(aNewSet.values());
console.log("\ndoes 3 exist in the first set? => ", aNewSet.has(3));
console.log("\ndoes ToRemove exist? => ", aNewSet.has("ToRemove"));
console.log("\nset 1 => ", aNewSet.values());
var setToMerge = new MySet();
setToMerge.add(3);
setToMerge.add("Daniel");
setToMerge.add(5);
setToMerge.add(6);
setToMerge.add("like");
console.log("\nset 2 => ", setToMerge.values());
var mergedSet = aNewSet.merge(setToMerge);
console.log("\nmerged set => ", mergedSet.values());
console.log("\nIntercetion of the sets => ", aNewSet.intersection(setToMerge).values());
console.log("\nDifference => ", aNewSet.difference(setToMerge).values());
console.log("\nIs arg a subSet? => ", aNewSet.subset(setToMerge));
