"use strict";

// a javascript implementation of a singly linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  insertAtBeginning(node) {
    node.next = this.head;
    this.head = node;
  }

  insertAtEnd(node) {
    this.getLast().next = node;
  }

  reverse() {
    let curr = this.head;
    let next = null;
    let prev = null;

    while (curr != null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
}

function printList(list) {
  let node = list.head;
  while (node) {
    console.log(node.data);
    node = node.next;
  }
}

let gwNode = new Node("Washington");
let jaNode = new Node("Adams, John");
let tjNode = new Node("Jefferson");

//gwNode.next = jaNode;
jaNode.next = tjNode;

const presidents = new LinkedList();
presidents.insertAtBeginning(gwNode);
presidents.insertAtEnd(jaNode);
// presidents.insertAtEnd(new Node("Madison"));
// presidents.insertAtEnd(new Node("Monroe"));

// console.log(new Date());
// console.log(gwNode.data);
// console.log(presidents);
// console.log("last: " + presidents.getLast().data);
console.log(presidents.size());
printList(presidents);
presidents.reverse();
printList(presidents);
console.log(presidents.size());
