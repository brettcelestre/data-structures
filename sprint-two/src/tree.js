var Tree = function(value){
  var newTree = {};
  newTree.value = 0;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var val = {"value": value, "children": []};

  // New
  _.extend(val, treeMethods);

  this.children.push(val);
};

treeMethods.contains = function(target){
  var test = false;
  var obj = this.children;

  // for (var key in obj) {
  //   if (obj[key].value === target) {
  //     test = true;
  //   } else {
  //     obj = obj[key].value;
  //   }
  // }

  var checkTarget = function(obj, target) {
    if (Array.isArray(obj)) {
      // Obj is an array
      _.each(obj, function(element) {
        
      });
    } else {
      // Obj is an object
      _.each(obj, function(element, key, list) {
        if (element === target && key === 'value') {
          test = true;
        } 
        if (element.children.length > 0) {
          checkTarget(element.children, target);
        }
      });
    }
    
  };

  // console.log('Obj:', obj);

  // for (var i = 0; i < obj.length; i++) {
  //   console.log(obj);
  //   // if (obj[i].value === target) {
  //   //   test = true;
  //   // }

  //   // if (obj[i].children.length !== 0) {
  //   //   obj = obj[i].children;
  //   // }
  // }

  checkTarget(obj);

  return test;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
