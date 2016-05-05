var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.index = 0;
};

Stack.prototype.push = function(value) {
  // Add new key-value pair
  this[this.index++] = value;
};

Stack.prototype.pop = function() {
  // Return the last-in/first-out key-value pair if this.index is truthy
  return this.index && this[--this.index];
};

Stack.prototype.size = function() {
  // Return this.index if it is truthy, otherwise 0
  return this.index || 0;
};

var newStack = new Stack();