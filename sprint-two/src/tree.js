var Tree = function(value){
  var newTree = {};
  newTree.value = 0;

  // Set children property to empty array (will be array of 'tree' objects)
  newTree.children = [];

  // Extend newTree with treeMethods for functional-shared instantiation
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  // Declare a child node with passed-in value
  var val = {"value": value, "children": []};

  // Extend new child node with treeMethods
  _.extend(val, treeMethods);

  // Push new child node to children array
  this.children.push(val);
};

treeMethods.contains = function(target){
  var test = false;
  var obj = this;

  var checkTarget = function(obj, target) {
    // obj.children is array of node's child objects
    if (obj.children.length > 0) {
      // Loop through each child's children array
      _.each(obj.children, function(child) {
        // Check if child.value matches our target
        if (child.value === target) {
          test = true;
        }
        // Recursively call this function with child object
        checkTarget(child, target);
      });
    }
  };
  
  // Initially call checkTarget to check
  checkTarget(obj, target);

  return test;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
