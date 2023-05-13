interface MySetMethods {
  values(): Array<any>;
  size(): number;
  has(value: any): boolean;
  add(value: any): void;
  remove(value: any): void;
  merge(Set2: MySetMethods): MySetMethods;
  intersection(Set2: MySetMethods): MySetMethods;
  subset(Set2: MySetMethods): boolean;
  difference(Set2: MySetMethods): MySetMethods;
}

class MySet implements MySetMethods {
  collection: Array<any>;
  constructor() {
    this.collection = [];
  }

  values(): any[] {
    return this.collection;
  }
  size(): number {
    return this.collection.length;
  }
  has(value: any): boolean {
    return this.collection.indexOf(value) !== -1;
  }
  add(value: any): void {
    if (this.collection.indexOf(value) === -1) {
      this.collection.push(value);
    }
  }
  remove(value: any): void {
    const valuePosition = this.collection.indexOf(value);
    if (value !== -1) {
      this.collection.splice(valuePosition, 1);
    }
  }
  merge(Set2: MySetMethods): MySetMethods {
    let mergedSet = new MySet();
    const set1 = this.values();
    for (let i = 0; i < set1.length; i++) {
      const element = set1[i];
      mergedSet.add(element);
    }
    for (let i = 0; i < Set2.size(); i++) {
      const element = Set2.values()[i];
      mergedSet.add(element);
    }

    return mergedSet;
  }

  intersection(Set2: MySetMethods): MySetMethods {
    const intersectionSet = new MySet();
    for (let i = 0; i < Set2.size(); i++) {
      const element = Set2.values()[i];
      if (this.has(element)) {
        intersectionSet.add(element);
      }
    }
    return intersectionSet;
  }
  subset(Set2: MySetMethods): boolean {
    return Set2.values().every((value) => this.collection.includes(value));
  }
  difference(Set2: MySetMethods): MySetMethods {
    const diffSet = new MySet();
    const Set1 = this.values();
    for (let i = 0; i < this.size(); i++) {
      const element = this.values()[i];
      if (!Set2.has(element)) {
        diffSet.add(element);
      }
    }
    for (let i = 0; i < Set2.size(); i++) {
      const element = Set2.values()[i];
      if (!this.has(element)) {
        diffSet.add(element);
      }
    }
    return diffSet;
  }
}

const aNewSet = new MySet();
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
const setToMerge = new MySet();
setToMerge.add(3);
setToMerge.add("Daniel");
setToMerge.add(5);
setToMerge.add(6);
setToMerge.add("like");
console.log("\nset 2 => ", setToMerge.values());
const mergedSet = aNewSet.merge(setToMerge);
console.log("\nmerged set => ", mergedSet.values());

console.log(
  "\nIntercetion of the sets => ",
  aNewSet.intersection(setToMerge).values()
);

console.log("\nDifference => ", aNewSet.difference(setToMerge).values());

console.log("\nIs arg a subSet? => ", aNewSet.subset(setToMerge));
