/**
 * 链表（单链表）
 * @Author: Junting
 * @Date: 2020-05-23 17:01:22
 * @Last Modified by: Junting
 * @Last Modified time: 2020-05-24 22:21:32
 */

 // 链表每个节点的数据结构，[值，指向下一个节点的指针（地址）]
class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // or Node
  }

  append(data) {
    // 当前节点已有指向地址
    // 往后追加
    if (this.next) {
      this.next.append(data);
    }
    this.next = new Node(data);
  }

  // 得到 index 位的元素
  get(index) {
    if (index === 0) {
      return this.data;
    }
    // console.log(this.next)
    // console.log("----------------------")
    return this.next.get(index - 1);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  // 得到链表长度
  length() {
    return this._length;
  }
  // 在链表末尾追加元素
  append(element) {
    if (this.head) {
      // this.head.append(element);
      this.tail.append(element);
    } else {
      this.head = new Node(element);
      this.tail = new Node(element);
    }
    this._length += 1;
  }
  // 在链表头部追加元素
  append_head(element) {
    // 新节点值
    let newHead = new Node(element);
    // newHead.next = this.head; // 先将当前节点的 next 保存住，再赋值，防止丢失指向
    newHead.next = this.tail
    this.head = newHead;
    this._length += 1;
  }
  // 在链表 index-1 和 index 之间插入一个元素
  // insert(element, 0) 等于 append_head(element)
  // insert(element, length()) 等于 append(element)
  insert(element, index) {
    const currentNode = this.findByIndex(index);
    if (currentNode === -1) {
      throw Error('Not found insert node');
    }
    const newNode = new Node(element);
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }

  findByIndex(index) {
    let currentNode = this.head;
    let idx = 0;
    while(currentNode.next !== null && idx !== index) {
      currentNode = currentNode.next;
      idx++;
    }
    return currentNode === null ? -1 : currentNode;
  }

  // 得到 index 位的元素
  get(index) {
    if (index < 0 || index > this.length() || !this.length()) {
      throw Error('Not found');
    }
    return this.head.get(index); // 递归方式去寻找第 index 位的值
  }

  // 显示所有节点
  display() {
    let currentNode = this.head.next;
    let str = this.head.data ? JSON.stringify(this.head.data) + ' -> ' : '';

    while (currentNode !== null) {
      str += JSON.stringify(currentNode.data) +  ' -> ';
      currentNode = currentNode.next
    }
    console.log(str);
  }
}

let linkedList = new LinkedList();
linkedList.append('Junting');
linkedList.append('JuntingLiu');
linkedList.append_head('Liu');
linkedList.display();
console.log(linkedList.length());
console.log(linkedList.get(0));
console.log('----------------findByIndex-------------------')
console.log(linkedList.findByIndex(1));
console.log('----------------Insert-------------------')
linkedList.insert('insert node', 1);
linkedList.display();