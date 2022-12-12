import fetch from 'node-fetch';
import { Address } from '../entities/Address';
import { Graph } from '../entities/Graph';

async function getLatitudeLogitude(data: Address): Promise<Address> {

  const geocode = await fetch(
    `https://api.geoapify.com/v1/geocode/search?name=${data.place_name}&housenumber=${data.housenumber}&street=${data.street}&postcode=${data.postcode}&city=${data.city}&state=${data.state}&country=${data.country}&format=json&apiKey=28d602d627cb411d988f5a9790dcefdf`,
  )
    .then(response => response.json())
    .catch(error => console.log('error', error));

  data.lat= geocode.results[0].lat;
  data.lon = geocode.results[0].lon;

  return data;
}

async function getDistanceTwoPoint(address:Array<Address>): Promise<Array<Object>> {

  await Promise.all(address.map(getLatitudeLogitude));

  var addressAtual = address[1];
  var addressAnt = address[0];

  var distances: Array<Object> = []

  const n = address.length * (address.length - 1) 

  for (var i=0; i<n; i++) {
    const routing = await fetch(
      `https://api.geoapify.com/v1/routing?waypoints=${addressAnt.lat},${addressAnt.lon}|${addressAtual.lat},${addressAtual.lon}&mode=drive&apiKey=28d602d627cb411d988f5a9790dcefdf`
    ) .then(response => response.json())
    .catch(error => console.log('error', error));

    addressAtual = address[i+1]
    addressAnt = address[i]

    console.log("i - " + address[i].housenumber + "-" + i)

    distances.push(routing.features[0].properties.distance)
  }

  return distances
 
}

function getGraph(address:Array<Address>) {
  var g = new Graph(4)

  var vertices = [ 'A', 'B', 'C', 'D'];

  // for (var i=0; i < vertices.length; i++) {
  //   g.addVertex(vertices[i])
  // }

  for (var i=0; i < address.length; i++) {
    g.addVertex(address[i])
  }

  var c=0;

  for (var i=0; i < address.length; i++) {

    for (var j=i+1; j < address.length - (i+c+1); j++) {
      g.addEdge(address[i], address[j])
    }
    c += 1


     //   v[0] -> '01' = 6, '02' = 4, '03' = 3
    //   v[1] -> '12' = 2, '13' = 1
    //   v[2] -> '23' = 9
    //   v[3] -> 
    
  }
  

  // g.addEdge(address[0], address[1])
  // g.addEdge(address[0], address[2])
  // g.addEdge(address[0], address[3])
  // g.addEdge(address[1], address[2])
  // g.addEdge(address[1], address[3])
  // g.addEdge(address[2], address[3])

    // g.addEdge('A', 'B')
    // g.addEdge('A', 'C')
    // g.addEdge('A', 'D')
    // g.addEdge('B', 'C')
    // g.addEdge('B', 'D')
    // g.addEdge('C', 'D')
 

  // for (var i=0; i < address.length; i++) {

  //   g.addEdge(address[i], address[i+1])
   

 

    

  
    
  // }

 
  g.printGraph()

  
}

//TO-DO: funcao que cria um grafo a partir da lista de endereços. Busca no grafo
// 1 - Endereço = Vertice -> coordenadas geograficas obtidas a partir da chamada a api
// 2 - Rotas = Aresta -> 
// 3 - Distancia = Peso -> 

export { getLatitudeLogitude, getDistanceTwoPoint, getGraph};
