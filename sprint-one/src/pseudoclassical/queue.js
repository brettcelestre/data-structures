var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  // Initialize length property - running value for size of object
  this.length = Object.keys(this).length;
};

Queue.prototype.enqueue = function(value) {
  // Loop from oldest object down to most recent
  // Shift older items to make room for newest value being added
  // Top of queue === oldest, bottom of queue === newest (value)
  for (var i = this.length + 1; i > 0; i--) {
    this[i] = this[i - 1];
  }

  // Assign bottom of queue to newest value
  this[0] = value;

  // Increment size up
  this.length++;
};

Queue.prototype.dequeue = function() {
  // Check that size is truthy
  // If so, will decrement size
  this.length && this.length--;

  // Return oldest value, top of queue
  return this[this.length];
};

Queue.prototype.size = function() {
  // Return size of object
  return this.length;
};

var newQueue = new Queue();