var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    // First time doing anything
    if (list.head === null  && list.tail === null){
      // Assigns list.head to the current value
      list.head = Node(value);
      // Assigns list.tail to the current value
      list.tail = Node(value);
    // if something exists
    } else {
      // Store the new tail node in newTail
      var newTail = Node(value);      
      // Stores the entire list.head in obj to make our for in loop 'recursive'
      var obj = list.head;
      // Iterate through obj
      for (var key in obj) {
        // Check if the current obj is not null
        if (obj.next !== null) {
          // If its not, we reassign obj to the current obj.next value
          obj = obj.next;
        } else {
          // otherwise, if the current obj.next value is null, assign the tail to that
          // value
          obj.next = newTail;
        } 
      }
      // Assign the new tail, newTail, node to list.tail
      list.tail = newTail;
    }
  };

  list.removeHead = function(){
    // Stores the current heads value
    var headValue = list.head.value;
    // Reassigns the head to the entire tail
    list.head = list.head.next;
    // Returns the removed heads value
    return headValue;
  };

  list.contains = function(target){
    var containsFlag = false;
    // Declare obj, set equal to list.head
    var obj = list.head;
    // Iterate through obj
    for (var key in obj) {
      // Check if the current obj.value equals the target
      if (obj.value === target) {
        // Update containsFlag to true
        containsFlag = true;
      } 
      // Check if the current obj.next is is not equal to null
      if (obj.next !== null) {
        // Update the obj var to be the current obj.next's value
        obj = obj.next;
      } 
    }
    // Return containsFlag
    return containsFlag;
  };
  
  // return the list
  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
