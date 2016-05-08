var BinarySearchTree = function(value){
  var newBinarySearchTree = Object.create(binarySearchTreeMethods);
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;

  return newBinarySearchTree;
};
  
var binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(node) {
  var newNode = BinarySearchTree(node);

  var checkNodes = function(value, tree) {
    if (value > tree.value) {
      if (tree.right !== null) {
        checkNodes(value, tree.right);
      } else {
        tree.right = newNode;
      }
    } else {
      if (tree.left !== null) {
        checkNodes(value, tree.left);
      } else {
        tree.left = newNode;
      }
    }
  }
  checkNodes(node, this);
};

binarySearchTreeMethods.contains = function(node) {
  var containsFlag = false;

  var containsCheck = function(target, tree) {
    if (tree.value === target) {
      containsFlag = true;
      return;
    }

    if (tree.left !== null) {
      containsCheck(target, tree.left);
    }

    if (tree.right !== null) {
      containsCheck(target, tree.right);
    }
  }

  containsCheck(node, this);

  return containsFlag;
};

binarySearchTreeMethods.depthFirstLog = function(func) {
  var treeFunc = function(node) {
    if (node.value) {
      func(node.value)
    }

    if (node.left !== null) {
      treeFunc(node.left);
    }

    if (node.right !== null) {
      treeFunc(node.right);
    }
  };

  treeFunc(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
