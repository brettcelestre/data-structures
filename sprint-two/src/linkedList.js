var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  //list.tail.index = 0;

  list.addToTail = function(value){
    
    // Recursion function to find and return the last object, so we can assign
    // the list.tail
    var lastNextNull = function( obj, property, newNext ){
      // Stores our entire tail
      var result = {

      };
      // Base case
      if ( obj.property === null ){
        result.value = newNext.value;
        // Assigns the very last o
        result.next = newNext;
        return result;
      }
      // Loop through list.head.next to the deepest .next property until null
      // then assign list.tail to that value
      for ( var key in obj ){
        // Checks that 
        if ( obj[key] !== null && typeof obj[key] === 'object'){
          //
          // this .next property has a nested object to loop through
          lastNextNull( result, property, newNext );
        }
      }
    };


    
    // First time doing anything
    if ( list.head === null  && list.tail === null){
      // Assigns list.head to the current value
      list.head = Node(value);
      // Assins list.tail to the current value
      list.tail = Node(value);
      // 
      list.head.next = list.tail;

    // if something exists
    } else {      


      // Assigns only the value to list.tail
      list.tail = Node(value);

      // Assigns the entire tail to the current heads next property
      list.head.next = lastNextNull(list.head.next, 'next', list.tail);      
    }
  };

  list.removeHead = function(){

    // Stores the current heads value
    var headValue = list.head.value;

    //list.head = list.tail;
    //list.head = Node.next;
    
    // Reassigns the head to the entire tail
    list.head = list.head.next;

    // Returns the removed heads value
    return headValue;

    //list.head = 

    // store list.head.next
  };

  list.contains = function(target){

  };

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
