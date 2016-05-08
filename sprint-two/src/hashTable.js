var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Create a newTuple, set eqaul to a new tuple array with our key/value
  var newTuple = [k,v];
  // Create a var, bucket, set equal empty array
  var bucket = [];

  // Check the main storage is not undefined
  if (this._storage.get(i) !== undefined) {
    // Iterate over the storage
    _.each(this._storage.get(i), function(tuple) {
      
      // push each element into our bucket array
      bucket.push(tuple);
    });
  }
  // This pushes the newTuple into our bucket array

  // if (1 > bucket.length) {
  //   // if (!first) {
  //     bucket.push(newTuple);
  //     // first = true;
  //   // }
  // }

  var overwriteFlag = false;

  _.each(bucket, function(tuple) {
    if (tuple[0] === k) {
      tuple[1] = v;
      overwriteFlag = true;
    }
  });

  if (overwriteFlag === false){
    bucket.push(newTuple);
  }
  
  // Use .set() on this._storage, the entire storage, on i and bucket
  // This resets the entire storage array to bucket
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Declare var bucket, set equal to entire storage array
  var bucket = this._storage.get(i);
  // Declare var value
  var value;
  // Iterate through the bucket's tuples
  _.each(bucket, function(tuple) {
    // If the current tuple's zeroth index equals k
    if (tuple[0] === k) {
      // Set value to the value of that tuple / the first index
      value = tuple[1];
    }
  });
  // Return value
  return value;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Declare var bucket, set equal to the entire storage array
  var bucket = this._storage.get(i);
  // Iterate through the bucket's tuples
  _.each(bucket, function(tuple) {
    // Check if the zeroth index in the current tuple equals k
    if (tuple[0] === k) {
      // If true, set the value index to null
      tuple[1] = null;
    }
  });
  // Use .set() on this._storage, the entire storage, on i and bucket
  // This resets the entire storage array to bucket
  this._storage.set(i, bucket);
};

// Create a new instance of HashTable
var newHashTable = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?


 */
