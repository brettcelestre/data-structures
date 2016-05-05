var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.index = 0;

  // Extend newStack with stackMethods
  _.extend(newStack, stackMethods);

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  // this references newStack object
  // Add key-value pair to newStack object
  this[this.index++] = value;
};

stackMethods.pop = function() {
  if (this.index) {
    return this[--this.index];
  }
};

stackMethods.size = function() {
  return this.index;
};