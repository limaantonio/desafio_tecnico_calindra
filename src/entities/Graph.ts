import { getDistanceTwoPoint } from '../services/RoutesService';
import { convertMetersToKilometers } from '../utils/ConvertDistance';
import { Address } from './Address';
import { Edge } from './Edge';

class Graph {
  adjacencyList: Map<Address, Array<Edge>>;
  nVertex: number;
  edge: Edge;

  constructor(vertex: number) {
    this.adjacencyList = new Map();
    this.edge = new Edge();
    this.nVertex = vertex;
  }

  addVertex(a: Address) {
    this.adjacencyList.set(a, []);
  }

  addEdge(a1: Address, a2: Address, weight: number) {
    var edge = new Edge();
    edge.destiny = a1;
    edge.origin = a2;
    edge.distance = weight;

    this.adjacencyList.get(a1)?.push(edge);
  }

  async setEdges(address: Array<Address>): Promise<Graph> {
    try {
      for (var i = 0; i < address.length; i++) {
        this.addVertex(address[i]);
      }

      for (var i = 0; i < address.length; i++) {
        for (var j = i; j < address.length - 1; j++) {
          const source = address[i];
          const destiny = address[j + 1];
          const distance = await getDistanceTwoPoint(source, destiny);
          const distance_km = convertMetersToKilometers(distance);

          this.addEdge(source, destiny, distance_km);
        }
      }
    } catch (error: any) {
      return error;
    }
    return this;
  }

  getEdges() {
    var get_keys = this.adjacencyList.keys();
    var i = new Address();
    var distances = new Array<Edge>();

    for (i of get_keys) {
      var get_values = this.adjacencyList.get(i);

      var j = new Edge();

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
