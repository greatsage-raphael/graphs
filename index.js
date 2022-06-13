//A graph is a non-linear data structure consisting of nodes and edges.

//Directed graph has direction while undirected graph has no direction.

///adjancency list
// {
//     "A":["B", "D"],
//     "B":["A", "C"],
//     "C":["B", "D"],
//     "D":["C", "A"],

// }

class Graph{
    constructor() {
        this.adjacencyList = []
    }
    addVertex(name) {
        //create a key with an empty array as the value   
        this.adjacencyList[name] = [];
    }
    addEdge(v1, v2){
      this.adjacencyList.push(v2);
      this.adjacencyList.push(v1);
    }
}

const graph = new Graph();

graph.addVertex("M")
graph.addVertex("Y")
console.log(graph)

graph.addEdge("A", "B")
graph.addEdge("A", "B")


console.log(graph)







