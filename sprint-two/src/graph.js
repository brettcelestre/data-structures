

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.storage = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  var newNode = {"name": node, "edges": []};

  this.storage.push(newNode);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  var exists = false;

  _.each(this.storage, function(element) {
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
    if (element.name === node) {
      index = i;
    }
  });

  this.storage.splice(index, 1);
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  var fromResult = false;
  var toResult = false;

  _.each(this.storage, function(element) {

    if (element.name === fromNode) {
      _.each(element.edges, function(edge) {
        if (edge === fromNode) {
          fromResult = true;
        }
      });
    }

    if (element.name === toNode) {
      _.each(element.edges, function(edge) {
        if (edge === toNode) {
          toResult = true;
        }
      });
    }
  });

  return fromResult && toResult;
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  // Iterate through all of this.storage to check each node
  // For each node, check for fromNode and for toNode
    // If fromNode is found
      // Ensure fromNode.edges doesn't contain (!) edge already
        // If not, push it!

  // Do same for toNode
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){

  // Same as addEdge but instead of pushing, we'll remove each node from one another

};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var newGraph = new Graph();

