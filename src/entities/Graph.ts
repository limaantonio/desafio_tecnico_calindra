import { Address } from './Address';
import { Edge } from './Edge';

class Graph {
  adjacencyList: Map<Address, Array<Edge>>;
  nVertex: number;
  edge: Edge;

  constructor(vertex: number) {
    this.adjacencyList = new Map();
    this.edge = new Edge(new Address(), new Address(), 0);
    this.nVertex = vertex;
  }

  addVertex(a: Address) {
    this.adjacencyList.set(a, []);
  }

  addEdge(a1: Address, a2: Address, weight: number) {
    var edge = new Edge(a1, a2, weight);

    this.adjacencyList.get(a1)?.push(edge);
  }

  getListDistances() {
    var get_keys = this.adjacencyList.keys();
    var i = new Address();
    var distances = new Array<Edge>();

    for (i of get_keys) {
      var get_values = this.adjacencyList.get(i);

      var j = new Edge(new Address(), new Address(), 0);

      if (get_values) {
        for (j of get_values) {
          distances.push(j);
        }
      }
    }

    return distances;
  }
}

export { Graph };
