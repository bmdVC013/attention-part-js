// Source: https://observablehq.com/@anjana/the-power-of-js-generators
// Recursive iteration with yield*
function binaryTreeNode(value) {
  let node = { value };
  console.log(
    "🚀 ~ file: recursive-iteration.js ~ line 4 ~ binaryTreeNode ~ node",
    node
  );

  node[Symbol.iterator] = function* depthFirst() {
    yield node.value;
    if (node.leftChild) yield* node.leftChild;
    if (node.rightChild) yield* node.rightChild;
  };

  return node;
}

const root = binaryTreeNode("root");
root.leftChild = binaryTreeNode("branch left");
root.rightChild = binaryTreeNode("branch right");
root.leftChild.leftChild = binaryTreeNode("leaf L1");
root.leftChild.rightChild = binaryTreeNode("leaf L2");
root.rightChild.leftChild = binaryTreeNode("leaf R1");

/* { 
  value: "root",
  leftChild: {
    value: "branch left",
    leftChild: {
      value: "leaf L1",
    },
    rightChild: {
      value: "leaf L2",
    }
  },
  rightChild: {
    value: "branch right",
    leftChild: {
      value: "leaf R1",
    }
  }
} */
