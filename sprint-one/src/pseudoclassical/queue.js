var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.length = Object.keys(this).length;
};

Queue.prototype.enqueue = function(value) {
  for (var i = this.length + 1; i > 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
  // this.length = Object.keys(this).length;
  this.length++;

  console.log(this);
};

Queue.prototype.dequeue = function() {
  this.length && this.length--;

  return this[Object.keys(this).length - 1];
};

Queue.prototype.size = function() {
  return this.length || 0;
};

var newQueue = new Queue();