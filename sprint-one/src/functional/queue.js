var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    // Check if the length of storage is greater than 0
    if ( Object.keys(storage).length > 0 ){
      // If true, iterate from the highest index + 1 of the storage object down to zero
      // Moves all property/value pairs up one index position above where there
      // originally were. It will be a new position for the key/value pair, since we 
      // will be inserting a new key/value at index 0, and need to make room.
      for( var i = Object.keys(storage).length ; i > 0; i--){
        // i in this case will be one index higher than the key/value pair we're
        // dealing with, when we use storage[i], it's creating a new index 1 step up
        // from where our pair currently lives. We set this equal to the actual value
        // , storage[i - 1], which lifts that value up an index.
        storage[i] = storage[i - 1]; 
      }
      // After all of that, we store the new value at the zeroth index, 'Bottom'
      storage[0] = value;
    } else {
      // If the length of storage is currently 0, that means we don't have anything,
      // and we store the value at storage[0]
      storage[0] = value;
    }
  };

  someInstance.dequeue = function(){
    // Declare var temp, set equal to the oldest key/value pair
    var temp = storage[Object.keys(storage).length - 1];
    // delete will remove the oldest key/value pair from storage
    delete storage[Object.keys(storage).length - 1];
    // return temp
    return temp;
  };

  someInstance.size = function(){
    // Check if the length of storage is less than or equal to 0
    if ( Object.keys(storage).length <= 0 ){
      // If true, that means storage is empty, return 0
      return 0
    } else {
    // Otherwise, return the current length of storage
    return Object.keys(storage).length;
    }
  };

  return someInstance;
};
