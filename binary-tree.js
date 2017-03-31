'use strict';

function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function Tree(nodeval) {
  this.root = new Node(nodeval);
}

Tree.prototype.traverseLDR = function() {
  nodeLDR(this.root);

  function nodeLDR(node) {
    if (node.left) {
      nodeLDR(node.left);
    }

    console.log(node.val);

    if (node.right) {
      nodeLDR(node.right);
    }

    return;
  }
}

const myTree = new Tree('A');

myTree.root.left = new Node('B');
myTree.root.right = new Node('C');
myTree.root.left.left = new Node('D');
myTree.root.left.right = new Node('E');
myTree.root.right.left = new Node('F');
myTree.root.right.right = new Node('G');
myTree.root.left.left.left = new Node('H');
myTree.root.left.left.right = new Node('I');
myTree.root.left.right.left = new Node('J');
myTree.root.left.right.right = new Node('K');
myTree.root.right.left.left = new Node('L');
myTree.root.right.left.right = new Node('M');
myTree.root.right.right.left = new Node('N');
myTree.root.right.right.right = new Node('O');

myTree.traverseLDR();
