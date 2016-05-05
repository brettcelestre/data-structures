var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {},
      // Declare var index, set to 0
      index = 0;

  // Implement the methods below
  someInstance.push = function(value){
    // Create a new property in storage with index, but increment index, set equal to value
    storage[index++] = value;
  };

  someInstance.pop = function(){
    // If index true, ( above 0 )
    if ( index ){
      // Return the --index in storage, then decreases index by 1 during storage access, and then 
      // decreases index by one after storage is accessed
      return storage[--index];
    }
  };

  someInstance.size = function(){
    // Return the index
    return index;
  };

  return someInstance;
};