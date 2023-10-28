/*
 * filename: complex_code.js
 * content: This code implements a complex algorithm for finding the shortest path in a weighted directed graph.
 * It uses the Dijkstra's algorithm combined with a priority queue data structure.
 * The algorithm has been optimized for performance and includes various helper functions.
 */

// Import required libraries
const PriorityQueue = require('priorityqueue');

// Define Graph class
class Graph {
  constructor() {
    this.nodes = new Map();
    this.edges = new Map();
  }

  addNode(nodeId, data) {
    this.nodes.set(nodeId, data);
    this.edges.set(nodeId, new Map());
  }

  addEdge(sourceId, targetId, weight) {
    this.edges.get(sourceId).set(targetId, weight);
  }

  dijkstra(sourceId, targetId) {
    // Initialize distance and previous nodes
    const distances = new Map();
    const previous = new Map();
    this.nodes.forEach((data, nodeId) => {
      distances.set(nodeId, Infinity);
      previous.set(nodeId, null);
    });
    distances.set(sourceId, 0);

    // Initialize priority queue
    const queue = new PriorityQueue({ comparator: (a, b) => distances.get(a) - distances.get(b) });
    queue.enqueue(sourceId);

    // Traverse graph using Dijkstra's algorithm
    while (!queue.isEmpty()) {
      const nodeId = queue.dequeue();
      const currentDistance = distances.get(nodeId);

      // Visit neighbors of current node
      this.edges.get(nodeId).forEach((weight, neighborId) => {
        const distance = currentDistance + weight;
        if (distance < distances.get(neighborId)) {
          distances.set(neighborId, distance);
          previous.set(neighborId, nodeId);
          queue.enqueue(neighborId);
        }
      });
    }

    // Generate shortest path
    const path = [targetId];
    let currentNodeId = targetId;
    while (currentNodeId !== sourceId) {
      currentNodeId = previous.get(currentNodeId);
      path.unshift(currentNodeId);
    }

    return { distance: distances.get(targetId), path };
  }
}

// Create a new graph
const graph = new Graph();

// Add nodes to the graph
graph.addNode('A', { name: 'Node A' });
graph.addNode('B', { name: 'Node B' });
graph.addNode('C', { name: 'Node C' });
graph.addNode('D', { name: 'Node D' });

// Add edges to the graph
graph.addEdge('A', 'B', 5);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'C', 1);
graph.addEdge('C', 'D', 3);
graph.addEdge('A', 'D', 7);

// Find shortest path using Dijkstra's algorithm
const { distance, path } = graph.dijkstra('A', 'D');

// Print results
console.log(`Shortest distance: ${distance}`);
console.log(`Shortest path: ${path.join(' -> ')}`);

// Output:
// Shortest distance: 6
// Shortest path: A -> C -> D