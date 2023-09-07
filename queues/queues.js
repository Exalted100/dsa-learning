class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
      return this.first;
    }
    enqueue(value){
        let tempNode = this.last;
      this.last = {value, next: null};
      if (tempNode) tempNode.next = this.last;
      if (this.length === 0) {
        this.first = this.last;
    }
      this.length++;
      return this;
    }
    dequeue(){
      this.first = this.first?.next;
      if (this.length > 0) this.length--
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  myQueue.peek();
  myQueue.enqueue('Joy');
  myQueue.enqueue('Matt');
  myQueue.enqueue('Pavel');
  myQueue.peek();
//   myQueue.dequeue();
//   myQueue.dequeue();
//   myQueue.dequeue();
  myQueue.peek();
  console.log(myQueue.peek())
  console.log(myQueue)