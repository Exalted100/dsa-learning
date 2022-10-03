class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }

  pop() {
    this.length--;
    this.data[this.length] = undefined;
  }

  deleteAtIndex(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.pop();
  }

  shift() {
    this.deleteAtIndex(0);
  }

  unshift(item) {
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = item;
    this.length++;
  }
}

const arr = new MyArray();
arr.push(20);
arr.push("yes");
arr.shift();
arr.unshift("no");
console.log(arr);
console.log(arr.get(1));