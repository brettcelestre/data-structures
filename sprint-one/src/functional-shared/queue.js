var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.index = 0;

  _.extend(newQueue, queueMethods);

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  // Check the length of this, newQueue, - 4 to account for index, enqueue, dequeue, and size methods > 0
  if ((Object.keys(this).length - 4) > 0) {
    // Iterate from oldest index to newest index
    for (var i = (Object.keys(this).length - 4); i > 0; i--) {
      // Starting from top, shift all key-value pairs up one index
      this[i] = this[i - 1];
    }

    // Add value at index 0
    this[0] = value;
  } else {
    // Add value at index 0
    this[0] = value;

  }
};

queueMethods.dequeue = function() {
  var results = [];
  var index;

  // Loop through each key-value pair in this/newQueue
  _.each(this, function(value, key) {
    // Check that the key is not one of queueMethods method or index
    if (key !== 'index' && key !== 'enqueue' && key !== 'dequeue' && key !== 'size') {
      // Create new object for key-value pair
      var temp2 = {};

      // Index tracks latest key-value index pushed to results array
      index = key;

      // Create key-value in temp2
      temp2[key] = value;

      // Reverse-push temp2 to results array
      results.unshift(temp2);
    }
  });

  // In this case, results[0] is the oldest key-value to be dequeued first
  var temp = results[0];

  // Remove key-value from this (newQueue object) at index 
  delete this.index;

  // If temp is not undefined (empty newQueue object), return the dequeued value
  if (temp !== undefined) {
    return temp[index][0];
  }
};

queueMethods.size = function() {
  // Check the length of this, newQueue, - 4 to account for index, enqueue, dequeue, and size methods
  return Object.keys(this).length - 4;
};
