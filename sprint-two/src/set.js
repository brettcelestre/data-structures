var Set = function(){
  var set = Object.create(setPrototype);
  // Set _storage equal to an empty array
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // Check if the item does not already exist by calling contains and passing item
  if (!this.contains(item)) {
    // If it doesn't exist, push the item into this _storage
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  // Create an exists flag
  var exists = false;
  // Iterate through the _storage
  _.each(this._storage, function(element) {
    // Check if the element exists
    if (element === item) {
      // Set exists to true
      exists = true;
    }
  });
  // Return exists
  return exists;
};

setPrototype.remove = function(item) {
  // Create an index var to store the specific index to be removed
  var index = 0;
  // Iterate through the _storage, pass anon function with 2 params, element and i
  _.each(this._storage, function(element, i) {
    // Check if element matches item
    if (element === item) {
      // Set index to the index of this element
      index = i;
    }
  });
  // This deletes the item from _storage
  this._storage.splice(index,1);
};

/*
 * Complexity: What is the time complexity of the above functions?
       Answer: All prototype functions are linear.
 */
