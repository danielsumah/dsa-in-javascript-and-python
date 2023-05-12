interface MySetMethods {
  values(): Array<any>;
  size(): number;
  has(value: any): boolean;
  add(value: any): void;
  remove(value: any): void;
  merge(Set2: Array<any>): any[];
  intersection(Set2: Array<any>): Array<any>;
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
  merge(Set2: any[]): any[] {
    let mergedSet = new MySet();
    const set1 = this.values();
    for (let i = 0; i < set1.length; i++) {
      const element = set1[i];
      mergedSet.add(element);
    }
    for (let i = 0; i < Set2.length; i++) {
      const element = Set2[i];
      mergedSet.add(element);
    }

    return mergedSet.values();
  }

  intersection(Set2: any[]): any[] {
    const intersectionSet = new MySet();
    for (let i = 0; i < Set2.length; i++) {
      const element = Set2[i];
      if (this.has(element)) {
        intersectionSet.add(element);
      }
    }
    return intersectionSet.values();
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
console.log("value to remove is last", aNewSet.values());
aNewSet.remove("ToRemove");
console.log(aNewSet.values());
console.log("does 3 exist? => ", aNewSet.has(3));
console.log("does 3 ToRemove? => ", aNewSet.has("ToRemove"));

console.log("\nset 1 => ", aNewSet.values());
const setToMerge = [3, "Daniel", 5, 6, "like"];
console.log("set 2 => ", setToMerge);
const mergedSet = aNewSet.merge(setToMerge);
console.log("merged set => ", mergedSet);

console.log("\nIntercetion of the sets => ", aNewSet.intersection(setToMerge));
