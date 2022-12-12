import { Address } from "./Address";

class Graph {
    adjacencyList:  Map<Address, Array<Address>>;
    vertex: Address;

    constructor (vertex: Address) {
        this.adjacencyList = new Map()
        this.vertex = vertex
    }

    addVertex(a: Address) {
        this.adjacencyList.set(a, [])
    }

    addEdge(v: Address, w: Address) {

        this.adjacencyList.get(v)?.push(w)
        this.adjacencyList.get(w)?.push(v)
        
    }

    printGraph() {
        // get all the vertices
        var get_keys = this.adjacencyList.keys();
    
        // iterate over the vertices
        var i = new Address()
        for (i of get_keys) {
            // great the corresponding adjacency list
            // for the vertex
            var get_values = this.adjacencyList.get(i);
            var conc = new Address();
            conc.place_name = ""
    
            // iterate over the adjacency list
            // concatenate the values into a string
            if (get_values) {
                var j = new Address()
                for (j of get_values){
                    conc.place_name += j.place_name + " ";
                   
                }
            }
            // print the vertex and its adjacency list
            console.log(i.place_name + " -> " + conc.place_name);
        }
    }
}

export {Graph}