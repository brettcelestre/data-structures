var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  // bucketArray = empty array
  // valueTuple = [k,v]
        // we will be pushing valueTuple into bucketArray
        // bucketArray 

  // if bucket[i] is not empty, loop through it and 
      // push tuples(element) into bucketArray
  // else
    // check if bucket at i is null / undefined
      // push new k,v tuple into bucketArray


  // set bucket[i] = bucketArray
          // ^
    // (this._storage[i])




 //---------------------------------------

  
  // Use helper function .set to place v at index i inside of LimitedArray
  // storage array
  //this._storage.set(i, v);
  //var obj = {k:v};
  //var obj2 = _.defaults(this._storage.get(i), obj);

  //console.log('obj2', obj2);

  // this._storage.set(i, v);

  // check if retrieve at k value !== i'th
  // if (this._storage.get(i) !== null && this._storage.get(i) !== undefined) {
  //   // this._storage.set(i, v);
  //   console.log('this._storage.get(i)', this._storage.get(i));
  //   console.log('this is full');
  //   console.log('this._storage.get(i) after defaults', this._storage.get(i));
  // }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Return the result of using the helper function .get on index i, which
  // returns the value at i inside of LimitedArray storage array
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // Use helper function .set to override index i's value inside of
  // LimitedArray storage array with null
  this._storage.set(i, null);
};

// Create a new instance of HashTable
var newHashTable = new HashTable();

/*
 * Complexity: What is the time complexity of the above functions?
 */


hashTable.retrieve('val1');


[
  {
    'val1': 'val1',
    'val2': 'val2'
  }
]


[
  {
    'val2': 'val2'
  }
]