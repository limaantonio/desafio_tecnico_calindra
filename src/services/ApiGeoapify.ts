import fetch from 'node-fetch';
import { Address } from '../entities/Address';

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

  for (var i=0; i<address.length; i++) {
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

//TO-DO: funcao que cria um grafo a partir da lista de endereços. Busca no grafo
// 1 - Endereço = Vertice -> coordenadas geograficas obtidas a partir da chamada a api
// 2 - Rotas = Aresta -> 
// 3 - Distancia = Peso -> 

export { getLatitudeLogitude, getDistanceTwoPoint };
