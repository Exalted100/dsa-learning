// Array stack implementation

class ArrayStack {
    constructor(){
      this.array = [];
    }
    peek() {
      return this.array[this.array.length - 1];
    }
    push(value){
      this.array.push(value);
      return this;
    }
    pop(){
      this.array.pop();
      return this;
    }
  }
  
  const myStack = new ArrayStack();
  myStack.peek();
  myStack.push('google');
  myStack.push('udemy');
  myStack.push('discord');
  myStack.peek();
//   myStack.pop();
//   myStack.pop();
  myStack.pop();
  console.log(myStack)
  console.log(myStack.peek())
  
  //Discord
  //Udemy
  //google

// Linked list stack implementation

class Node {
    constructor(value){
      this.value = value;
      this.next = null;
    }
  }
  
  class Stack {
    constructor(){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
    peek() {
      return this.top?.value;
    }
    push(value){
        if (!this.top) {
            let newNode = new Node(value)
            this.top = newNode
            this.bottom = this.top
        } else {
            let holdingPointer = this.top
            this.top = new Node(value)
            this.top.next = holdingPointer
        }
        this.length++

        return this;
    }
    pop(){
        this.top = this.top?.next
        this.length--
        if (this.lenth === 0) this.bottom = null

        return this;
    }
    //isEmpty
  }
  
  const linkedListStack = new Stack();
  linkedListStack.peek();
  linkedListStack.push('google');
  linkedListStack.push('udemy');
  linkedListStack.push('discord');
  linkedListStack.peek();
  linkedListStack.pop();
//   linkedListStack.pop();
//   linkedListStack.pop();
console.log(linkedListStack.peek())
  
  
  //Discord
  //Udemy
  //google
  