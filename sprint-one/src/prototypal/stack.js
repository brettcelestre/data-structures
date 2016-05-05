var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Declare a var newStack and set equal to Object.creat() on stackMethods
  var newStack = Object.create(stackMethods);
  // Create new key/value in newStack as index set equal to 0
  newStack.index = 0;
  // Return newStack
  return newStack;
};

var stackMethods = {};

// Create a new method .push on stackMethods, takes 1 parameter, value
stackMethods.push = function(value){
  // Add key/value pair in this at this.index, then increment this.index by 1 ( ++ )
  // set that property equal to value
  this[this.index++] = value;
};

// Create a new method .pop on stackMethods
stackMethods.pop = function(){
  // This is checking that this index is truthy and also if this object has an index
  // After the key/value is return, decrease index by 1 ( -- )
  return this.index && this[--this.index];
};

stackMethods.size = function(){
  // Return this index which represents the size of the object
  return this.index;
};