var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {},
      // Declare index to keep track of current storage index
      index = 0;

  // Implement the methods below
  someInstance.push = function(value){
    // increase
    storage[index++] = value;
  };

  someInstance.pop = function(){
    if ( index ){
      return storage[--index];
    }
  };

  someInstance.size = function(){
    return index;
  };

  return someInstance;
};
