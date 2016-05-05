var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){

};

queueMethods.dequeue = function(){
// Store oldest key-value pair - has smallest key

// Create placeholder object

// Loop through rest of newQueue and 'enqueue' to placeholder

// re-set newQueue to placeholder object - will no longer have oldest key-value

// return stored oldest key-value pair

};

queueMethods.size = function(){
  return Object.keys(this).length;
};


