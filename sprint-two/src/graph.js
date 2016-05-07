

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  // Array of node objects
  this.storage = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  // Build newNode
  var newNode = {"name": node, "edges": []};

  // Push to this.storage array
  this.storage.push(newNode);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var exists = false;

  _.each(this.storage, function(element) {
    // Check each node in this.storage
    if (element.name === node) {
      exists = true;
    }
  });

  return exists;
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  var index = 0;

  _.each(this.storage, function(element, i) {
    // Check each node in this.storage for index to be removed
    if (element.name === node) {
      index = i;
    }
  });

  // Remove at index
  this.storage.splice(index, 1);
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var fromResult = false;
  var toResult = false;

  // Iterate through each node in this.storage
  _.each(this.storage, function(element) {
    // Find the fromNode to check its edges array for the toNode edge
    if (element.name === fromNode) {
      // Iterate through this node's edges array to find the toNode edge
      _.each(element.edges, function(edge) {
        if (edge === toNode) {
          toResult = true;
        }
      });
    }

    // Find the toNode to check its edges array for the fromNode edge
    if (element.name === toNode) {
      // Iterate through this node's edges array to find the fromNode edge
      _.each(element.edges, function(edge) {
        if (edge === fromNode) {
          fromResult = true;
        }
      });
    }
  });

  // Return if both the fromNode and toNode contain each other as edges
  return fromResult && toResult;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  // Iterate through all of this.storage to check each node
  _.each(this.storage, function(element) {
    // For each node, check for fromNode and for toNode
    if (element.name === fromNode) {
      var alreadyExists = false;

      // Iterate through the node's edges to check if it already exists
      _.each(element.edges, function(edge) {
        if (edge === toNode) {
          alreadyExists = true;
        }
      });

      // If it doesn't exist yet, add it
      if (alreadyExists === false) {
        element.edges.push(toNode)
      }
    }

    if (element.name === toNode) {
      var alreadyExists = false;

      // Iterate through the node's edges to check if it already exists
      _.each(element.edges, function(edge) {
        if (edge === fromNode) {
          alreadyExists = true;
        }
      });

      // If it doesn't exist yet, add it
      if (alreadyExists === false) {
        element.edges.push(fromNode);
      }
    }
  });
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  // Iterate through each node in this.storage
  _.each(this.storage, function(element) {
    // For each node, check for the fromNode
    if (element.name === fromNode) {
      var fromIndex = 0;

      // Find the index in the node's edges array to remove
      _.each(element.edges, function(edge, i) {
        if (edge === toNode) {
          fromIndex = i;
        }
      });

      // Remove the edge
      element.edges.splice(fromIndex, 1);
    }

    // For each node, check for the fromNode
    if (element.name === toNode) {
      var toIndex = 0;

      // Find the index in the node's edges array to remove
      _.each(element.edges, function(edge, i) {
        if (edge === fromNode) {
          toIndex = i;
        }
      });

      // Remove the edge
      element.edges.splice(toIndex, 1);
    }
  });

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this.storage, function(element) {
    cb(element.name);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var newGraph = new Graph();

