// Adjust Doubly linked list traversal to go from the back if index > length / 2

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null,
      };
      this.tail = this.head;
      this.length = 1;
    }
  
    append(value) {
      let temp = this.tail;
      temp.next = { value, next: null, prev: temp };
      this.tail = temp.next;
      this.length++;
    }
  
    prepend(value) {
      let temp = this.head;
      this.head = { value, next: temp, prev: null };
      this.length++;
    }
  
    printList() {
      const arr = [];
      let currentNode = this.head;
  
      for (let i = 0; i < this.length; i++) {
        arr.push(currentNode.value);
  
        currentNode = currentNode.next;
      }
  
      return arr;
    }
  
    insert(index, value) {
      if (index === 0) {
        this.prepend(value);
      } else if (index === this.length - 1) {
        this.append(value);
      } else {
        let nodeBefore = this.traverseToIndex(index - 1);
        let tempNode = nodeBefore.next;
        nodeBefore.next = { value, next: tempNode, prev: nodeBefore };
        this.length++;
      }
    }
  
    traverseToIndex(index) {
      let currentNode = this.head;
      for (let i = 0; i <= index; i++) {
        if (i === index) return currentNode;
  
        currentNode = currentNode.next;
      }
    }
  
    remove(index) {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let nodeBefore = this.traverseToIndex(index - 1);
        nodeBefore.next = nodeBefore.next.next;
        nodeBefore.next.prev = nodeBefore;
        if (index === this.length - 1) {
          this.tail = nodeBefore;
        }
      }
      this.length--;
    }
  }

  let myLinkedList = new LinkedList(10);
// let myLinkedList = new LinkedList();
myLinkedList.append(16);
myLinkedList.append(5);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
//   myLinkedList.insert(20, 88);
myLinkedList.remove(1);
console.log(myLinkedList);
console.log(myLinkedList.traverseToIndex(2));
console.log(myLinkedList.printList());
