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
        // i in this case will be 
        storage[i] = storage[i - 1]; 
      }
      storage[0] = value;
    } else {
      storage[0] = value;
    }
  };

  someInstance.dequeue = function(){
    var temp = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    return temp;
  };

  someInstance.size = function(){
    if ( Object.keys(storage).length <= 0 ){
      return 0
    } else {
    return Object.keys(storage).length;
    }
  };

  return someInstance;
};
