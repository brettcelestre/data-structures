var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // Declare new var newQueue, set equal to Object.create() on queueMethods
  var newQueue = Object.create(queueMethods);
  // Return newQueue
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  // Iterate from the highest key, oldest value, first item added, down to the most recent
  for( var i = Object.keys(this).length; i > 0; i-- ){
    // Shift older key/value pair up one to make room for newest value to be enqueued
    this[i] = this[i - 1];
  }
  // Place new key/value pair at the bottom of the queue
  this[0] = value;
};

queueMethods.dequeue = function(){
// Store oldest key-value pair - has smallest key
  var tempValue = this[Object.keys(this).length - 1];
// re-set newQueue to placeholder object - will no longer have oldest key-value
  delete this[Object.keys(this).length - 1];
// return stored oldest key-value pair
  return tempValue;
};

queueMethods.size = function(){
  // Return the length of newQueue, if no length - return 0
  return Object.keys(this).length || 0;
};


